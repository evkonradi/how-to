import React from 'react';
import Card from 'react-bootstrap/Card';

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from 'react-bootstrap/Carousel';

function Resource() {
    return(
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
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Card style={{ width: '18rem' }}>
        
            <Card.Title>TEST TEST</Card.Title>
       
    </Card>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

export default Resource;