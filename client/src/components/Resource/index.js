import React from "react";
import Card from "react-bootstrap/Card";
import {Row, Col} from "react-bootstrap";

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";

function Resource() {
  return (
    //         <CardDeck>
    //             <Card>
    //                 <Card.Img />
    //                     <Card.Body>
    //                         <Card.Title>Test</Card.Title>
    //                         <Card.Text>this is to see what it looks like
    //                         </Card.Text>
    //                         </Card.Body>
    //                         <Card.Footer>what does this look like?</Card.Footer>
    //   </Card>
    //   </CardDeck>
    <Row>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block h-60 w-100"
          src="../public/cook_img.jpg"
          alt="First slide"
        />
        <Card style={{ width: "18rem" }}>
          <Col>
          <Card.Title>TEST TEST</Card.Title>

          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Col>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card style={{ width: "18rem" }}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card style={{ width: "18rem" }}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Card>
      </Carousel.Item>
    </Carousel>
    </Row>
  );
}

export default Resource;
