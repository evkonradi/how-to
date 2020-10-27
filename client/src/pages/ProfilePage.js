import React from 'react';
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../utils/queries';
import { Col, Row, Container, Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardTitle, CardSubtitle, Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useParams } from 'react-router-dom';
import ResourceAddEdit from './ResourceAddEdit';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";



const ProfilePage = () => {

  return (
    <main>
      <div>
        
            <Container>
              <Col sm="12" md="6" lg="8" offset="3">
              <Row>
                <h2>Welcome Back, UserName</h2>
              </Row>
              <Row>
                <a href="/resource/:id?">Make a New Post</a><br /><br />
              </Row>
              <Switch>
              <Route exact path="/resource/:id?" component={ResourceAddEdit} />
                </Switch>
              <Row>
                <p>image caption goes here</p>
              </Row>
              <Row>
                <p>this is where the body of the resource will go</p>
              </Row>
              <Row>
                <h4>this is where a video will go</h4>
              </Row>
              </Col>
            </Container>
        
      </div>
    </main>
  );
};

export default ProfilePage;
