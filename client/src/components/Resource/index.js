import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle }  from 'reactstrap';
import {Row, Col} from 'reactstrap';

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";
// import cook from '../../public/cook.jpg';

// body inverse style={{ backgroundColor: '#9DB4C0', borderColor: '#333' }}>

function Resource() {
  return (
    <div>
    <Row>
    <Carousel>
      <Carousel.Item>
        <Col>
        
          <Card style={{ width: "18rem" }}>
            <CardBody>
          <CardTitle>How To Cook</CardTitle>
          <CardSubtitle>Contributor</CardSubtitle>
          </CardBody>
          <img width="100%" src="/images/cook.jpg" alt="cooking image" />
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
        </Col>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: "18rem" }}>
            <CardBody>
          <CardTitle>How To Eat</CardTitle>
          <CardSubtitle>Contributor</CardSubtitle>
          </CardBody>
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: "18rem" }}>
            <CardBody>
          <CardTitle>How To Clean</CardTitle>
          <CardSubtitle>Contributor</CardSubtitle>
          </CardBody>
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
      </Carousel.Item>
    </Carousel>
    </Row>
    </div>
  );
}

export default Resource;
