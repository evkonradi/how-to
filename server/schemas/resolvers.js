const { User, Resource } = require('../models');

const ObjectId = require('mongoose').Types.ObjectId;
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
        // resource: () => {
        //     return GetResource.find();
        // },
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
            const resource = await Resource.create(args);

            console.log(context);
            console.log(context.user);
            console.log(resource._id);

            await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { resources: resource._id } },
                { new: true }
            );
          
            return resource;
        },
        updateResource: async (parent, args) => {

            console.log(context.user);
            return await Resource.findByIdAndUpdate(args._id, {...args}, { new: true } );
        },
        deleteResource: async(parent, {_id})=>{
            try{
                return await Resource.findByIdAndRemove({_id});
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}

module.exports = resolvers;

