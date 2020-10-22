import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle }  from 'reactstrap';
import {Row, Col} from 'reactstrap';

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";
// import cook from '../../public/cook.jpg';

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
    <div className="resource">
    <Row>
    <Carousel>
      <Carousel.Item>
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
