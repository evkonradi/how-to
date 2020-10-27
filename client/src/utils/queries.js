import gql from 'graphql-tag';

export const QUERY_RESOURCE = gql`
query resource($_id: ID!) {
    resource(_id: $_id) {
      _id
      name
      shortDescription
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
      dateCreated
  }
}
`;
