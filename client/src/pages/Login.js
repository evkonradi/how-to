import React, { Component, useState } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import GoogleLogin from "react-google-login";

import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import { valueFromAST } from "graphql";
import { Button } from "@chakra-ui/core";

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

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    // this.signup(response, "google");
  };

  // render(){
  return (
    <main>
      <div>
        <br /><br />
        <Form className="login-form" onSubmit={handleFormSubmit}>
          <h1>
            <span className="font-weight-bold">Welcome Back!</span>
          </h1>
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
          <Col>
          <Button
            size="lg"
            height="46px"
            width="200px"
            border="2px"
            //   borderColor="green.500"
            color="white"
            bg="#5C6B73"
            _hover={{ bg: "#D99748" }}
            type="submit"
          >
            Join
          </Button>
          <br /><br />
            <GoogleLogin
              clientId="212266341985-bfblloh84d96u203r5i5b80l745ea911.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Col>
          <div className="text-center pt-3">
            <a href="/signup" class="nullA">Need an Account? Sign Up.</a>
            {/* <span className="p-2">|</span>
            <a href="/signup">Forgot Password</a> */}
          </div>
        </Form>
        {error && <div>Login failed</div>}
      </div>
    </main>
  );
  // };
};

export default Login;
