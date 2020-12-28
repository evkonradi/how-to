const { User, Resource, Profit, Transaction } = require('../models');

const ObjectId = require('mongoose').Types.ObjectId;
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('resources');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },

        resources: async () => {
            return Resource.find().sort({ "dateCreated": -1 });
        },
        resource: async (parent, { _id }) => {
            return await Resource.findById(_id);
        },
        users: async () => {
            return await User.find()
            .select('-__v -password')
            .populate('resources');
        },
        user: async (parent, { username }) => {
            return await User.findOne({ username })
            .select('-__v -password')
            .populate('resources');
        },
        resources_search: async (parent, { text }) => {
            return await Resource.find( {$or: [{ resourceBody: {$regex: text, $options: 'i'}}, {name: {$regex: text, $options: 'i'}},
                {shortDescription: {$regex: text, $options: 'i'}}] } );
        },
        checkout: async (parent, {products}, context) => {

            const url = new URL(context.headers.referer).origin;
      
            // const order = new Order({ products: args.products });
            // const { products } = await order.populate('products').execPopulate();

            const line_items = [];
      
            for (let i = 0; i < products.length; i++) {
              // generate product id
              const product = await stripe.products.create({
                name: products[i].name + " (Author: " + products[i].author + ")",
                description: products[i].shortDescription
                //images: [`${url}/images/${products[i].image}`],
              });
      
              // generate price id using the product id
              const price = await stripe.prices.create({
                product: product.id,
                unit_amount: products[i].cost * 100,
                currency: 'usd',
              });
      
              // add price id to the line items array
              line_items.push({
                price: price.id,
                quantity: 1
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });
            
            return { session: session.id };
        },
        profits: async () => {
            return Profit.find();
        },
        profit: async () => {
            return await Profit.findOne({ isCurrent: true });
        },
        transactions: async () => {
            return await Transaction.find().sort({ "dateCreated": 1 });
        },
        transactionsUser: async (parent,{ username }) => {
            return await Transaction.find({username}).sort({ "dateCreated": 1 });
        }
    },
    

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Invalid credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addResource: async (parent, args, context) => {
            if (context.user){
                const resource = await Resource.create({displayName: context.user.username, ...args});

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { resources: resource._id } },
                    { new: true }
                );
    
                return resource;
            }
            throw new AuthenticationError('Not logged in');
        },
        updateResource: async (parent, args, context) => {
            if (context.user){

                return await Resource.findByIdAndUpdate(args._id, {displayName: context.user.username, ...args}, { new: true } );
            }

            throw new AuthenticationError('Not logged in');
        },
        deleteResource: async(parent, {_id}, context)=>{
            if (context.user){
                const resource = await Resource.findByIdAndRemove({_id});

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { resources: resource._id } },
                    { new: true }
                );

                return resource;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateWallet: async (parent, args) => {

            const data = await Profit.findOne({ isCurrent: true });

            const user = await User.findOneAndUpdate(
                { username: args.username },
                { $inc: { wallet: args.amount-args.amount*data.feeRate/100 } },
                { new: true }
            );

            await Profit.findOneAndUpdate(
                { isCurrent: true },
                { $inc: { currentProfit: args.amount*data.feeRate/100 }},
                { new: true }
            );

            await Transaction.create(
                {
                    username: args.username, 
                    resource_id: args.resource_id, 
                    resource_name: args.resource_name, 
                    amount: args.amount-args.amount*data.feeRate/100,
                    fee: args.amount*data.feeRate/100
                }
            );

            return user;
        },
        // updateProfit: async (parent, args) => {

        //     const data = await Profit.findOne({ isCurrent: true });

        //     return await Profit.findOneAndUpdate(
        //         { isCurrent: true },
        //         { $set: { currentProfit: args.amount*data.feeRate/100 + data.currentProfit }},
        //         { new: true }
        //     );
        // }
    }
}

module.exports = resolvers;

