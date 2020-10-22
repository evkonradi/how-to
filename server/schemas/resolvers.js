const { Resource } = require('../models');

const resolvers = {
    Query: {
        resources: async () => {
            return await Resource.find();
        },
        resource: async (parent, { _id }) => {
            return await Resource.findById(_id);
        },
    },

    Mutation: {
        addResource: async (parent, args) => {
            const resource = await Resource.create(args);
            return resource;
        },
        updateResource: async (parent, args) => {
            return await Resource.findByIdAndUpdate(args._id, {...args});
        }
    }
}

module.exports = resolvers;

