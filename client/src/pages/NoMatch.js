import React from 'react';
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import { Box } from '@chakra-ui/core';
import { Card } from "react-bootstrap";


const NoMatch = () => { 
    return (
     
      <main>
         <div>
        <Container>

          <br />
        <Col xs={6}>
          <Box xs={12} offset={2}>
            <br />
        <h1 className="horizon-center">no match <span role="img" aria-label="no match">😿</span> </h1>
        <br />
        </Box>
        </Col>
        <Card border="secondary">
          <Card.Body>
            <br />
            <h5>that hasn't been created yet.</h5><br /><br/>
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
        <Jumbotron className="whitespace" />
        <Jumbotron className="whitespace" />
        <Jumbotron className="whitespace" />
        </Container>
        </div>
        </main>
        
     );
  } ; 

export default NoMatch;
