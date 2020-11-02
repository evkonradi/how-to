import React from "react";
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import {
  Col,
  Row,
  Container,
  Jumbotron,
} from "reactstrap";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";
import Resource from "../components/Resource";
import { Redirect, useParams, Link } from "react-router-dom";
import { Divider, Box } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Card, CardBody, CardImg, CardTitle, CardText} from "react-bootstrap"

import Auth from '../utils/auth';
import Search from "../components/Search";
import CardResource from "../components/CardResource";


const ProfilePage = props => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, { variables: { username: userParam } });

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
        Sign up | log in 🙂
      </h1>
    );
  }

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
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionHeader>
                      <Box flex="1" textAlign="left">
                        Info
                      </Box>
                      <AccordionIcon />
                    </AccordionHeader>
                  </AccordionItem>
                </Accordion>
              <p className="small">Info</p>
              <br />
              <h6>Username: {`${user.username}`}<br/>Name: {`${user.firstName}`} {`${user.lastName}`}<br/>Email: {`${user.email}`}</h6>
              {/* <p className="small"></p> */}
              <br />
              {/* <p className="small">Wallet</p> */}
              {/* <br /> */}
                <a href="/resource" className="small" className="nullA">
                  New Post
                </a>
              
              </Col>
              <Divider color="black" orientation="vertical" />
              <Col xs={8} lg={10}>
           
                {user.resources.map((resource) =>(     
                     <Box>           
                      <CardResource resource={resource} imgWidth="80%"></CardResource>
                      <Link className="plain" to={`/resource/${resource._id}`}><Button className="edit">Edit</Button></Link>
               
                      </Box>
                ))}
                  

              </Col>
              </Row>
          </Col>
          <br />
          <br />
          <h2>see what others are contributing</h2>
          <br />
          <br />
          <Search></Search>
          <Resource></Resource>
          <Jumbotron className="whitespace" />
        </Container>
        <br />
      </div>
    </main>
  );
};

export default ProfilePage;
