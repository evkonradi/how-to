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
    const { name, value } = event.target;

    setUserState({
      ...userState,
      [name]: value,
    });
    try {
      updateUser({ variables: { userParam, ...userState } })
    }
    catch(e){
      console.error(e);
    }
  };

  return (
    <main>
      <div className="main-container-light">
        
        <Box h="40px" bg="transparent"></Box>
          <Box  className="copyBox" w="100%" p={4} color="#C2DFE3">
                <h4>Welcome Back, {`${user.firstName}`}!</h4> 
            <Box className="profileLeft" minWidth="30%">
                <p className="profileField">Username</p> <span className="smallBox" contentEditable="true" onChange={handleChange} name={userState.username}>{`${user.username}`}</span>
                <p className="profileField">First Name</p> <span className="smallBox" contentEditable="true" onChange={handleChange} value={userState.firstName}>{`${user.firstName}`}</span>
                <p className="profileField">Last Name</p> <span className="smallBox" contentEditable="true" onChange={handleChange} value={userState.lastName}>{`${user.lastName}`}</span>
                <p className="profileField">Email</p> <span className="smallBox" contentEditable="true" onChange={handleChange} value={userState.email}>{`${user.email}`}</span>
                <p className="profileField">Wallet</p> ${`${user.wallet.toFixed(2)}`}<br></br><br></br>
                <Box className="newPostBtn" >
                <a className="plainA" href="/statement/">See Statement</a>
                </Box>
                <Box className="newPostBtn" >
                  <a className="plainA" href="/resource">Create New Post</a>
                </Box>
                <br></br>
            </Box>
            <Box minWidth="70%">
              {user.resources.map((resource) => (
                  <Box>
                    <CardResource
                      resource={resource} useClass="card-img-size-search"
                    ></CardResource>
                    <Link className="plain" to={`/resource/${resource._id}`}>
                      <Button className="edit">EDIT</Button>
                    </Link>
                  </Box>
                ))}
            </Box>
          <Row>
            <Col>
              <hr className="dividerProfile"></hr>
            </Col>
          </Row>
          <Box maxWidth="60%">
            <p class="recentlyAddP">SEE WHAT'S NEW</p>
              <Resource></Resource>
              </Box>
          </Box>
      </div>
    </main>
  );
};

export default ProfilePage;
