import React from 'react';
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../utils/queries';
import { Col, Row, Container, Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardTitle, CardSubtitle, Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useParams } from 'react-router-dom';
import ResourceAddEdit from './ResourceAddEdit';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Divider, Box, BoxProps } from "@chakra-ui/core";
// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";



const ProfilePage = () => {

  return (
    <main>
      <div>
        
            <Container>
              {/* <Col sm="12" md="6" lg="8" offset="3"> */}
              <Row>
                <h2>Welcome Back, UserName</h2>
              </Row>
              <Row xs="2">
              <Col xs="4">
              
                <a href="/resource/:id?"><h5>Make a New Post</h5></a><br /><br />
              
                <p>User Stats</p>
            
                <p>Payment</p>
           
                <p>Edit User Info</p>
           
                </Col>
              
              <Divider color="black" orientation="vertical" />
            
             
              
              <Col xs="8">
    
                      <p>lets test the divider</p>
                      
              </Col>
              </Row>
              
              {/* </Col> */}
            </Container>
        
      </div>
    </main>
  );
};

export default ProfilePage;
