import React, { useState } from "react";
import { Form, FormGroup, Input, Col, Container, Row, Jumbotron } from "reactstrap";

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
    console.log("Form submitted");
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
    <main>
        <br /><br />
        <Container>
        <Form className="login-form" onSubmit={handleFormSubmit}>
        <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
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
            <Row>
          <Button
            className="center"
            size="lg"
            height="46px"
            width="200px"
            border="2px"
            color="white"
            bg="#5C6B73"
            _hover={{ bg: "#D99748" }}
            type="submit"
          >
            Login
          </Button>
          </Row>
          <p className="signupText">Need an Account? <br/>
          <a href="/signup" class="nullA">Sign Up.</a></p>

          </Col>
        </Form>   
        {error && <div>Login failed</div>}
        <Jumbotron className="whitespace" />
        <Jumbotron className="whitespace" />
        </Container>
    </main>
  );
  // };
};

export default Login;
