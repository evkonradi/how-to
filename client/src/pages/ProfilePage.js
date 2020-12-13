import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import { Col, Row, Container } from "reactstrap";
import Resource from "../components/Resource";
import { Redirect, useParams, Link } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import Auth from "../utils/auth";
import CardResource from "../components/CardResource";
import { UPDATE_USER } from "../utils/mutations";

const ProfilePage = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });
  const [updateUser] = useMutation(UPDATE_USER);

  const [userState, setUserState] = useState({
    username: "",
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    wallet: "",
    password: "",
  })

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


  const handleChange = (event) => {
    event.preventDefault();
    console.log("A change was made");
    const { name, value } = event.target;

    setUserState({
      ...userState,
      [name]: value,
    });
    try {
      updateUser({ variables: { userParam, ...userState } })
      console.log(userState);
    }
    catch(e){
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <Container className="cardTextAlign">
<br></br>
          <Row>
            <Box className="profileLeft" width="30%">
                Username: <span contentEditable="true" onChange={handleChange} name={userState.username}>{`${user.username}`}</span><br></br>
                <span textAlign="left">
                  First Name: <span contentEditable="true" onChange={handleChange} value={userState.firstName}>{`${user.firstName}`}</span><br></br>
                  Last Name: <span contentEditable="true" onChange={handleChange} value={userState.lastName}>{`${user.lastName}`}</span><br></br>
                </span>
                <span textAlign="left">
                  Email: {`${user.email}`}<br></br><br></br>
                </span>
                <span textAlign="left">
                  Wallet: ${`${user.wallet}`}<br></br>
                </span>
                  <br></br>
                  <a href="/resource" className="newPostLink">Create New Post</a>
            </Box>
            <Box width="70%">
              {user.resources.map((resource) => (
                  <Box>
                    <CardResource
                      resource={resource}
                    ></CardResource>
                    <Link className="plain" to={`/resource/${resource._id}`}>
                      <Button className="edit">Edit</Button>
                    </Link>
                    <br></br><br></br>
                  </Box>
                ))}
            </Box>
          </Row>

          <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <h3>Welcome Back, {`${user.firstName}`}!</h3>
              </Box>

          <Row>
            <Col>
              <hr className="dividerProfile"></hr>
            </Col>
          </Row>

          <Row>
            <Col sm={{size: 12}} md={{size:8, offset:2}} className="cardTextAlign">
              <p class="recentlyAddP">see what others are contributing</p>
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
