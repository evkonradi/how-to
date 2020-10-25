const { User, Resource } = require('../models');

const resolvers = {
    Query: {
        resources: async () => {
            return Resource.find().sort({ createdAt: -1 });
        },
        resource: async (parent, { _id }) => {
            return await Resource.findById(_id);
        },
        // resource: () => {
        //     return GetResource.find();
        // },
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
        // login: async () => {

        // },
        addResource: async (parent, args) => {
            const resource = await Resource.create(args);
            return resource;
        },
        updateResource: async (parent, args) => {
            return await Resource.findByIdAndUpdate(args._id, {...args}, { new: true } );
            // return await Resource.findByIdAndUpdate(args._id, 
            //     {
            //         name: args.name, 
            //         shortDescription: args.shortDescription,
            //         resourceBody: args.resourceBody,
            //         images: args.images
            //     }
            // );
        }
    }
}

module.exports = resolvers;

