import React from "react";
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_RESOURCE, QUERY_USER, QUERY_ME } from "../utils/queries";
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
  Jumbotron,
} from "reactstrap";
import Resource from "../components/Resource";
import { Redirect, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Divider, Box, BoxProps } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

import { ADD_RESOURCE } from '../utils/mutations';
import Auth from '../utils/auth';
// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";
// import { Resource } from "../../../server/models";

const ProfilePage = props => {
  const { username: userParam } = useParams();

  const [addResource] = useMutation(ADD_RESOURCE);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};
  const loggedIn = Auth.loggedIn();

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    console.log("Login failed");
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h1>
        Sign up or log in 🙂
      </h1>
    );
  }

  const handleClick = async () => {
    try {
      await addResource({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <Container>
          <br />
          <Col sm="12" md="6" lg="12" offset="3">
            <Row>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <h3>Welcome Back, {`${user.firstName}`}!</h3>
              </Box>
            </Row>
            <br />
            <br />
            <Row>
              <Col xs={3} md="3" lg="3">
              <p className="small">Info</p>
              <br />
              <p className="small">Wallet</p>
              <br />
                <a href="/resource" className="small" className="nullA">
                  New Post
                </a>
                
              </Col>
              <Divider color="black" orientation="vertical" />
              <Col xs={6}>
{/* <CardResource></CardResource> */}

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
          <br />
          <br />
          <h2>see what other are contributing.</h2>
          <Resource></Resource>
          <Jumbotron className="whitespace" />
        </Container>
        <br />
      </div>
    </main>
  );
};

export default ProfilePage;
