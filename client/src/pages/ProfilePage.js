import React from "react";
// import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
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
import { useParams } from "react-router-dom";
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
            <Row>
              <Col xs={3} md="3" lg="3">
              <p className="small">User Details</p>
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
        <br />
      </div>
    </main>
  );
};

export default ProfilePage;
