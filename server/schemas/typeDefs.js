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
    
    email: String
    resourceCount: Int
    resource: [Resource]
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
    images: [Image]
    videos: [Video]
  }

  type Query {
    users: [User]
    user(username: String!): User
    resources: [Resource]
    resource(_id: ID!): Resource
  }

  type Mutation {
   
    addUser(username: String!, email: String!, password: String!): User
    addResource(name: String!, shortDescription: String!, resourceBody: String, images: [ImageInput], videos: [VideoInput]): Resource
    updateResource(_id: ID!, name: String!, shortDescription: String!, resourceBody: String, images: [ImageInput], videos: [VideoInput]): Resource
  }
  `;

module.exports = typeDefs;
