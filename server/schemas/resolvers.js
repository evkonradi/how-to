const { Resource } = require('../models');

const resolvers = {
    Query: {
        resources: async () => {
            return await Resource.find();
        },
        resource: async (parent, { _id, name }) => {
            const params = {};

            if (name) {
                params.name = {
                    $regex: name
                };
            }
            return await Resource.findById(params).populate('resource');
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

