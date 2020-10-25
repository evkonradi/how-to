import gql from 'graphql-tag';

export const QUERY_RESOURCES = gql`
    query resources($name: String!) {
        resources(name: $name) {
            _id
            name
            shortDescription
            image {
                imageURL
                description
            }
            video {
                videoURL
                description
            }
        }
    }
    `;