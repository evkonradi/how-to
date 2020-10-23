import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import {Row, Col} from 'reactstrap';

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";
// import cook from '../../public/cook.jpg';

// import Carousel,
//       CarouselItem,
//       CarouselControl,
//       CarouselIndicators,
//       CarouselCaption from "reactstrap";


// body inverse style={{ backgroundColor: '#9DB4C0', borderColor: '#333' }}>
// key={image.id} use with Carousel.Item once db established

function Resource() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <Col xs="12">
          <Card style={{ width: "18rem" }}>
            <CardBody inverse style={{ backgroundColor: "#9DB4C0"}}>
          <CardTitle>How To Cook</CardTitle>
          <CardSubtitle>Contributor Name</CardSubtitle>
          </CardBody>
          <img width="100%" src="/images/cook.jpg" alt="cook" />
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
            <CardBody inverse style={{ backgroundColor: "$success" }}>
          <CardTitle>How To Eat</CardTitle>
          <CardSubtitle>Contributor Name</CardSubtitle>
          </CardBody>
          <img top width="100%" src="/images/clean.jpg" alt="clean" />
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: "18rem" }}>
            <CardBody inverse style={{ backgroundColor: "#9DB4C0" }}>
          <CardTitle>How To Clean</CardTitle>
          <CardSubtitle>Contributor Name</CardSubtitle>
          </CardBody>
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <img top width="100%" src="/images/blueberry.jpg" alt="clean" />
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

// CarouselControl.propTypes = {
//   direction: PropTypes.oneOf(['prev', 'next']).isRequired,
//   onClickHandler: PropTypes.func.isRequired,
//   cssModule: PropTypes.object,
//   directionText: PropTypes.string
// };

// CarouselItem.propTypes = {
//   ...Transition.propTypes,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   in: PropTypes.bool,
//   cssModule: PropTypes.object,
//   children: PropTypes.node,
//   slide: PropTypes.bool,
// };

export default Resource;
