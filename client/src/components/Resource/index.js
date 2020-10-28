import React from 'react';
import { Card, CardText, CardBody, CardHeader }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { Link } from "react-router-dom";
//import { idbPromise } from "../../utils/helpers";
//import { useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  const resources = data?.resources || [];

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : 
            <Carousel>
              {
                resources.map((resource) => (
                  <Carousel.Item key={resource._id}>
                    <Link to={`/articles/${resource._id}`} key={resource._id}>
                      <Card  outline color='secondary' >
                        <CardHeader>{resource.name}</CardHeader>
                        <CardBody style={{ backgroundColor: "#9DB4C0"}}>
                          {/* <CardImg>{resource.imgUrl}</CardImg> */}
                          <img src="./images/stars.jpg" width="100%"></img>
                          <CardText>{resource.shortDescription}</CardText>
                          <CardText>Created at: {resource.dateCreated} by {resource.displayName}</CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </Carousel.Item>
                ))
              }
            </Carousel>
        }
      </div>
    </main>
  );
};

export default Resource;
