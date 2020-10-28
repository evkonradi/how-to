import React from 'react';
import { Container } from 'reactstrap';
import { Box } from '@chakra-ui/core';


const NoMatch = () => { 
    return (
        <Container>
        <main>
          <Box>
        <h1>sorry, nothing matches 😿 </h1>
        </Box>
        </main>
        </Container>
     );
  } ; 

export default NoMatch;
