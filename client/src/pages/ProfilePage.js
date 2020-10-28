import React from "react";
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_RESOURCE, QUERY_USER } from "../utils/queries";
import {
  Col,
  Row,
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardHeader,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Redirect, useParams } from "react-router-dom";
// import ResourceAddEdit from './ResourceAddEdit';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Divider, Box, BoxProps } from "@chakra-ui/core";
// import Resource from '../components/Resource';
// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";

import { Button } from "@chakra-ui/core";
import { ADD_RESOURCE } from '../utils/mutations';
import Auth from '../utils/auth';

const ProfilePage = props => {
  // const { username: userParam } = useParams();

  // const [addResource] = useMutation(ADD_RESOURCE);
  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam }
  // });

  // const user = data?.me || data?.user || {};

  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to="/profile" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in. Please sign up or log in!
  //     </h4>
  //   );
  // }

  // const handleClick = async () => {
  //   try {
  //     await addResource({
  //       variables: { id: user._id }
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <main>
      <div>
        <Container>
          <br />
          <Col sm="12" md="6" lg="12" offset="3">
            <Row>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <h3>Welcome Back, User!</h3>
              </Box>
            </Row>
            <br />
            <Row className="user" xs="4">
              <p className="small">User Details</p>
            </Row>
            <Row>
              <Col xs={3} md="3" lg="3">
                <a href="/resource" className="small">
                  New Post
                </a>
                <br />
                <p className="small">Wallet</p>
              </Col>
              <Divider color="black" orientation="vertical" />
              <Col xs={6}>
                <Card>
                  <CardHeader>This is where a Card will Go</CardHeader>
                </Card>
                <Card>
                  <CardHeader>This is where a Card will Go</CardHeader>
                </Card>
                <Card>
                  <CardHeader>This is where a Card will Go</CardHeader>
                </Card>
              </Col>
              </Row>

             
          </Col>
        </Container>
      </div>
    </main>
  );
};

export default ProfilePage;
