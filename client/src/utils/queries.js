import gql from 'graphql-tag';

export const QUERY_RESOURCE = gql`
query resource($_id: ID!) {
    resource(_id: $_id) {
      _id
      name
      shortDescription
      displayName
      resourceBody
      dateCreated
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

export const QUERY_RESOURCES_HOMEPAGE = gql`
{
  resources {
      _id
      name
      shortDescription 
      displayName
      dateCreated
      images{
        fileURL
        imageCaption
      }
  }
}
`;

export const QUERY_RESOURCES_SEARCH = gql`
query resource_search($text: String!) {
  resources_search(text: $text) {
    _id
    name
    shortDescription
    displayName
    dateCreated
    images{
      fileURL
      imageCaption
    }
  }
}
`;

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    firstName
    lastName
    displayName
    email
    resourceCount
    resources {
      _id
      name
      shortDescription
      resourceBody
      dateCreated
      displayName
    }
  }
}
`;

export const QUERY_ME = gql`
{
  me {
    _id
    username
    firstName
    lastName
    displayName
    email
    wallet
    resourceCount
    resources {
      _id
      name
      shortDescription
      resourceBody
      dateCreated
      displayName
      images {
        fileURL
        imageCaption
      }
      videos {
        fileURL
        videoCaption
      }
    }
  }
}
`;

export const QUERY_ME_BASIC = gql`
{
  me {
    _id
    username
    firstName
    lastName
    displayName
    email
    resourceCount
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [CheckoutProductInput]!) {
    checkout(products: $products) {
      session
    }
  }
`;