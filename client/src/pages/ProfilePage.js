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
                <a href="/resource/:id?"><h5>Make a New Post</h5></a><br /><br />
              </Row>
              {/* <Switch>
              <Route exact path="/resource/:id?" component={ResourceAddEdit} />
                </Switch> */}
              <Row>
                <p>User Stats</p>
              </Row>
              <Row>
                <p>Payment</p>
              </Row>
              <Row>
                <h4>Edit User Info</h4>
              </Row>
              </Col>
            </Container>
        
      </div>
    </main>
  );
};

export default ProfilePage;
