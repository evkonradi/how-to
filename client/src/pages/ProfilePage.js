import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import { Col, Row, Container} from "reactstrap";
import Resource from "../components/Resource";
import { Redirect, useParams, Link } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import Auth from "../utils/auth";
import CardResource from "../components/CardResource";

const ProfilePage = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    console.log("Login failed");
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h1>Sign up | log in <span role="img" aria-label="Sign up | log in">🙂</span></h1>;
  }

  return (
    <main>
      <div>
        <Container className="cardTextAlign">
          <br />

          <Row>
            <Col>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <h3>Welcome Back, {`${user.firstName}`}!</h3>
              </Box>
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col sm={{size: 12}} md={{size: 3}} lg={{size: 3, offset: 1}}>
                <span textAlign="left">
                    Username: {`${user.username}`}<br></br>
                </span>
                <span textAlign="left">
                  Name: {`${user.firstName}`} {`${user.lastName}`}<br></br>
                </span>
                <span textAlign="left">
                  Email: {`${user.email}`}<br></br>
                </span>
                <div>
                  <br></br>
                  <a href="/resource" className="newPostLink">New Post</a>
                </div>
            </Col>
            <Col sm={{size: 12}} md={{size: 9}} lg={{size: 7}}>
              {user.resources.map((resource) => (
                  <Box>
                    <CardResource
                      resource={resource}
                      imgWidth="70%"
                    ></CardResource>
                    <Link className="plain" to={`/resource/${resource._id}`}>
                      <Button className="edit">Edit</Button>
                    </Link>
                    <br></br><br></br>
                  </Box>
                ))}
            </Col>
          </Row>

          <Row>
            <Col>
              <hr className="dividerProfile"></hr>
            </Col>
          </Row>

          <Row>
            <Col sm={{size: 12}} md={{size:8, offset:2}} className="cardTextAlign">
              <br />
              <h2>see what others are contributing</h2>
              <br />
              <br />
            </Col>
          </Row>

          <Row>
            <Col sm={{size: 12}} md={{size:8, offset:2}} className="cardTextAlign">
              <Resource></Resource>
            </Col>
          </Row>


        </Container>
        <br />
      </div>
    </main>
  );
};

export default ProfilePage;
