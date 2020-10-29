import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Box } from '@chakra-ui/core';
import { Card, CardBody } from "react-bootstrap";


const NoMatch = () => { 
    return (
     
      <main>
         <div>
        <Container>

          <br />
        <Col xs={6}>
          <Box xs={12} offset={2}>
            <br />
        <h1>no match 😿 </h1>
        <br />
        </Box>
        </Col>
        <Card border="secondary">
          <Card.Body>
            <br />
        <Row>
        <h3 className="center">Want to contribute?</h3>
        </Row> 
        <Row>
        <a className="center" href="/signup">sign up</a>
        </Row>
        <br />
        </Card.Body>
        </Card>
        <br /><br/>
        </Container>
        </div>
        </main>
        
     );
  } ; 

export default NoMatch;
