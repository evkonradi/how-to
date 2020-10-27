import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardTitle, CardSubtitle, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
import { useParams } from "react-router-dom";

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";
// import cook from '../../public/cook.jpg';

// import Carousel,
//       CarouselItem,
//       CarouselControl,
//       CarouselIndicators,
//       CarouselCaption from "reactstrap";

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
                    <Card  outline color='secondary' >
                      <CardHeader>{resource.name}</CardHeader>
                      <CardBody style={{ backgroundColor: "#9DB4C0"}}>
                        {/* <CardImg>{resource.imgUrl}</CardImg> */}
                        <img src="./images/stars.jpg" width="100%"></img>
                        <CardText>{resource.shortDescription}</CardText>
                        <CardText>Created at: {resource.dateCreated}</CardText>
                      </CardBody>
                    </Card>
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
