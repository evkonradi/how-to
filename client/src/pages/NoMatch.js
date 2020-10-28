import React from 'react';
import { Container, Col } from 'reactstrap';
import { Box } from '@chakra-ui/core';


const NoMatch = () => { 
    return (
        <Container>
        <main>
          <br />
        <Col xs={6}>
          <Box xs={12}>
            <br />
        <h1>no match 😿 </h1>
        <br />
        </Box>
        </Col>
        </main>
        </Container>
     );
  } ; 

export default NoMatch;
