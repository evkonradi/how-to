import React from 'react';
import { Box, Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardTitle, CardSubtitle }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
import { useParams } from "react-router-dom";

const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  const resources = data?.resources || [];

  return (
   <main>
      <div>
        {loading ? <div>Loading...</div> : 
        <Box>
            {
                resources.map((resource) => (
                    <Card.Item key={resource._id}>
                        <Link to={`/articles/${resource._id}`} key={resource._id}>
                    <Card  outline color='secondary' >
                      <CardHeader>{resource.name}</CardHeader>
                      <CardBody style={{ backgroundColor: "#9DB4C0"}}>
                        <CardImg>{resource.imgUrl}</CardImg>
                        <img src="./images/stars.jpg" width="100%"></img>
                        <CardText>{resource.shortDescription}</CardText>
                        <CardText>Created at: {resource.dateCreated}</CardText>
                      </CardBody>
                    </Card>
                    </Link>
                    </Card.Item>
                ))
            }
            </Box>
        }
      </div>
    </main>
  );
};

export default Resource;
