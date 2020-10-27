import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Card, CardText, CardBody, CardHeader }  from 'reactstrap';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import Carousel from "react-bootstrap/Carousel";

// this code was me just trying to get anything to populate
const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  const resources = data?.resources || [];

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : 
          <div>
            <Carousel>
              {
                resources.map((resource) => (
                  <Carousel.Item key={resource._id}>
                    <Card  outline color='secondary' >
                      <CardHeader>{resource.name}</CardHeader>
                      <CardBody style={{ backgroundColor: "#9DB4C0"}}>
                        <CardText>{resource.shortDescription}</CardText>
                        <CardText>Created at: {resource.dateCreated}</CardText>
                      </CardBody>
                    </Card>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </div>
        }
      </div>
    </main>
  );
};

export default Resource;
