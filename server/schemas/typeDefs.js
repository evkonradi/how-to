const { gql } = require('apollo-server-express');

const typeDefs = gql`

  input ImageInput{
    fileURL: String,
    imageCaption: String
  }

  input VideoInput{
    fileURL: String,
    videoCaption: String
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    displayName: String
    email: String
    resourceCount: Int
    resources: [Resource]
  }

  type Image{
    _id: ID!,
    fileURL: String,
    imageCaption: String
  }

  type Video{
    _id: ID!,
    fileURL: String,
    videoCaption: String
  }

  type Resource{
    _id: ID,
    name: String,
    shortDescription: String,
    resourceBody: String,
    dateCreated: String,
    displayName: String,
    images: [Image]
    videos: [Video]
  }

  type ResourceShort{
    _id: ID,
    name: String,
    shortDescription: String,
    displayName: String,
    resourceBody: String,
    dateCreated: String
    images: [Image]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    resources: [Resource]
    resource(_id: ID!): Resource
    resources_search(text: String!): [ResourceShort]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, firstName: String!, lastName: String!, displayName: String!, email: String!, password: String!): Auth
    addResource(name: String!, shortDescription: String!, resourceBody: String, images: [ImageInput], videos: [VideoInput], displayName: String): Resource
    updateResource(_id: ID!, name: String!, shortDescription: String!, resourceBody: String, images: [ImageInput], videos: [VideoInput], displayName: String): Resource
    deleteResource(_id: ID!): Resource
  }
  `;

module.exports = typeDefs;
