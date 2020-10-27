import React from 'react';
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../utils/queries';
import { Col, Row, Container, Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardTitle, CardSubtitle, Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useParams } from 'react-router-dom';
// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";



const ResourcePage = () => {

  return (
    <main>
      <div>
        
            <Container>
              <Row>
                <h2>Title of Article</h2>
              </Row>
              <Row>
                <h4>Short Description</h4><br /><br />
              </Row>
              <Row>
              <h5>Author's Name</h5>
              </Row>
              <Row>
                <img src="client/public/images/lemons.jpeg"></img>
              </Row>
              <Row>
                <p>this is where the body of the resource will go</p>
              </Row>
              <Row>
                <h4>this is where a video will go</h4>
              </Row>
            </Container>
        
      </div>
    </main>
  );
};

export default ResourcePage;
