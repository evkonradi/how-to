import React from 'react';
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../utils/queries';
import { Col, Row, Container, Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardTitle, CardSubtitle, Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useParams } from 'react-router-dom';
// import ResourceAddEdit from './ResourceAddEdit';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Divider, Box, BoxProps } from "@chakra-ui/core";
// import Resource from '../components/Resource';
// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";

import { Button } from "@chakra-ui/core";



const ProfilePage = () => {

  return (
    <main>
      <div>
        
            <Container>
            <br />
              <Col sm="12" md="6" lg="12" offset="3">
              <Row>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <h3>Welcome Back, UserName</h3>
                </Box>
                </Row>
                <br />
                <Row className="user" xs="4">
                <p className="small">User Details</p>
                </Row>
              <Row xs="3">
                <Col xs="3" md="3" lg="3">
                <a href="/resource" className="small">New Post</a><br />
                <p className="small">Wallet</p>
                </Col> 
              <Divider color="black" orientation="vertical" />
              </Row>

              <Row xs="2">
              <Col xs="6">
                 
    {/* <Resource></Resource> */}
                      <p>this is where resources the user has created will go</p>
                      
              </Col>
              </Row>
              
              
              </Col>
            </Container>
        
      </div>
    </main>
  );
};

export default ProfilePage;