import React, { useState } from "react";
import { Form, FormGroup, Input, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
// import { valueFromAST } from "graphql";
import { Button, Box } from "@chakra-ui/core";

// import { render } from 'node-sass';

import Auth from '../utils/auth';

const Login = (props, Component) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // Clear form:
    setFormState({
      email: "",
      password: ""
    });
  };

  // render(){
  return (
    <div className="main-container">
    <main>
      
      <Box bg="transparent" height="40px"></Box>
        <Box className="copyBox">
        <Form className="login-form" onSubmit={handleFormSubmit}>
        <Box bg="wheat" w="100%" p={4} color="#C2DFE3">
          <h1 className="font-weight-bold">Welcome Back!</h1>
          </Box>
          <br />
          <FormGroup>
            {/* <Label>Email</Label> */}
            <Input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label>Password</Label> */}
            <Input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </FormGroup>
          <br />

          <Col xs={12} md={12} lg={12} offset={6}>
     
          <Button
            className="center"
            size="lg"
            height="46px"
            width="200px"
            border="2px"
            bg="#D99748"
            color="wheat"
            _hover={{ color: "#253237" }}
            type="submit"
          >
            Login
          </Button>
          <Box bg="transparent" height="20px"></Box>
          <p className="signupText">Need an Account? <br/>
          <Link className="copyLink" to="/signup">Signup</Link></p>

          </Col>
        </Form>   
        {error && <div>Login failed</div>}
        </Box>
    </main>
    </div>
  );
  // };
};

export default Login;
