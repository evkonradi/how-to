const { gql } = require('apollo-server-express');

const typeDefs = gql`

  input ImageInput{
    fileName: String,
    fileURL: String,
    imageCaption: String
  }

  input VideoInput{
    fileName: String,
    fileURL: String,
    videoCaption: String
  }

  type Image{
    _id: ID!,
    fileName: String,
    fileURL: String,
    imageCaption: String
  }

  type Video{
    _id: ID!,
    fileName: String,
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
    resources: [Resource]
    resource(_id: ID!): Resource
  }

  type Mutation {
    addResource(name: String!, shortDescription: String!, resourceBody: String, images: [ImageInput], videos: [VideoInput]): Resource
    updateResource(_id: ID!, name: String!, shortDescription: String!, resourceBody: String, images: [ImageInput], videos: [VideoInput]): Resource
  }
  `;

module.exports = typeDefs;
