import gql from 'graphql-tag';

export const ADD_RESOURCE = gql`
mutation addResource($articleName: String!, $articleShortDesc : String!, $articleText: String,
    $imageList: [ImageInput], $videoList: [VideoInput]) {
      addResource(name: $articleName, shortDescription: $articleShortDesc, resourceBody: $articleText,
      images:$imageList, videos: $videoList) {
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

export const UPDATE_RESOURCE = gql`
mutation updateResource($id: ID!, $articleName: String!, $articleShortDesc : String!, $articleText: String,
  $imageList: [ImageInput], $videoList: [VideoInput]) {
    updateResource(_id: $id, name: $articleName, shortDescription: $articleShortDesc, resourceBody: $articleText,
      images:$imageList, videos: $videoList) {
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
