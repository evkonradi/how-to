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
    email: String,
    wallet: Float,
    resourceCount: Int
    resources: [Resource]
    paidResources: [Resource]
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
    username: String,
    cost: Float,
    images: [Image]
    videos: [Video]
  }

  type ResourceShort{
    _id: ID,
    name: String,
    shortDescription: String,
    username: String,
    resourceBody: String,
    dateCreated: String
    cost: Float,
    images: [Image]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  input CheckoutProductInput{
    _id: ID,
    name: String,
    shortDescription: String,
    author: String,
    cost: Float
  }

  type Profit{
    currentProfit: Float,
    feeRate: Float,
    isCurrent: Boolean
  }

  type Transaction{
    dateCreated: String,
    username: String,
    resource_id: ID,
    resource_name: String,
    amount: Float,
    fee: Float
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    resources: [Resource]
    resource(_id: ID!): Resource
    resources_search(text: String!): [ResourceShort]
    checkout(products: [CheckoutProductInput]!): Checkout
    profits: [Profit]
    profit: Profit
    transactions: [Transaction]
    transactionsUser(username: String!): [Transaction]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addResource(name: String!, shortDescription: String!, resourceBody: String, cost: Float!, images: [ImageInput], videos: [VideoInput]): Resource
    updateResource(_id: ID!, name: String!, shortDescription: String!, resourceBody: String!, cost: Float!, images: [ImageInput], videos: [VideoInput]): Resource
    deleteResource(_id: ID!): Resource
    updateWallet(username: String!, amount: Float, resource_id: ID, resource_name: String): User
  }
  `;

module.exports = typeDefs;
