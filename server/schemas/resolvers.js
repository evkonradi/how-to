const { User, Resource } = require('../models');

const ObjectId = require('mongoose').Types.ObjectId;
// const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        resources: async () => {
            return await Resource.find();
        },
        resource: async (parent, { _id }) => {
            return await Resource.findById(_id);
        },
        users: async () => {
            return await User.find()
            .populate('resources');
        },
        user: async (parent, { username }) => {
            return await User.findOne({ username })
            .populate('resources');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        // login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });

        //     if (!user) {
        //         throw new AuthenticationError('Invalid credentials');
        //     }
        //     const correctPw = await user.isCorrectPassword(password);
        //     if (!correctPw) {
        //         throw new AuthenticationError('Invalid credentials');
        //     }
        //     return user;
        // },
        addResource: async (parent, args) => {
            const resource = await Resource.create(args);
            return resource;
        },
        updateResource: async (parent, args) => {
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

