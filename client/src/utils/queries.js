import gql from 'graphql-tag';

export const QUERY_RESOURCES = gql`
  query getResources($resources: ID) {
    resources(resources: $resources) {
      _id
      name
      shortDescription
      resourceBody
      images {
        fileName
        fileURL
        imageCaption}
        videos {
        fileName
        fileURL
        videoCaption
    }
  }
}
`;

export const QUERY_ALL_RESOURCES = gql`
 {
    resources {
      _id
      name
      shortDescription
      resourceBody
      images {
        fileName
        fileURL
        imageCaption}
        videos {
        fileName
        fileURL
        videoCaption
    }
  }
}
`;