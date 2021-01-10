import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      firstName
      lastName
      email
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      username
      firstName
      lastName
      email
    }
  }
}
`;

export const ADD_RESOURCE = gql`
mutation addResource($articleName: String!, $articleShortDesc : String!, $articleText: String!, $cost: Float!,
    $imageList: [ImageInput], $videoList: [VideoInput]) {
      addResource(name: $articleName, shortDescription: $articleShortDesc, resourceBody: $articleText, cost: $cost,
      images:$imageList, videos: $videoList) {
        _id
        name
        shortDescription
        username
        resourceBody
        dateCreated
        cost
        images{
            fileURL
            imageCaption
        }
        videos{
            fileURL
            videoCaption
        }
      }
    }
`;

export const UPDATE_RESOURCE = gql`
mutation updateResource($id: ID!, $articleName: String!, $articleShortDesc : String!, $articleText: String!, $cost: Float!,
  $imageList: [ImageInput], $videoList: [VideoInput]) {
    updateResource(_id: $id, name: $articleName, shortDescription: $articleShortDesc, resourceBody: $articleText, cost: $cost,
      images:$imageList, videos: $videoList) {
      _id
      name
      shortDescription
      username
      resourceBody
      dateCreated
      cost
      images{
        fileURL
        imageCaption
      }
      videos{
        fileURL
        videoCaption
      }
    }
  }
`;

export const UPDATE_WALLET = gql`
mutation($username: String!, $amount: Float, $resource_id: ID, $resource_name: String){
  updateWallet(username: $username, amount: $amount, resource_id: $resource_id, resource_name: $resource_name){
     _id,
    username,
    wallet
  }
}
`;

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  updateUser(_id: $id, username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      username
      firstName
      lastName
      email
    }
  }
}
`;

export const DELETE_RESOURCE = gql`
mutation deleteResource($id: ID!) {
    deleteResource(_id: $id) {
      _id
      name
    }
  }
`;
