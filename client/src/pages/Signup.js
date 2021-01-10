import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Button, Box } from "@chakra-ui/core";

import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', firstName: '', lastName: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(
      formState.username + " has signed up using email " + formState.email
    );
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="main-container">
      <Box bg="transparent" height="60px"></Box>
        <Box className="copyBox">
        <Box bg="transparent" height="40px"></Box>
          <Form className="login-form" onSubmit={handleFormSubmit}>
            
            <Box bg="wheat" w="100%" p={4} color="#C2DFE3" maxWidth="80%">
            <h1>
              <span className="font-weight-bold text-center">Sign Up Here.</span>
            </h1>
            </Box>
            <Box bg="transparent" height="20px"></Box>

            <FormGroup>
              <Input
                className="inputMain"
                type="username"
                placeholder="User Name"
                name="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
            <Input
                className="inputMain"
                type="firstName"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
            <Input
                className="inputMain"
                type="lastName"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </FormGroup>
            {/* <FormGroup>
            <Input
                className="inputMain"
                type="displayName"
                placeholder="Display Name"
                name="displayName"
                id="displayName"
                value={formState.displayName}
                onChange={handleChange}
              />
            </FormGroup> */}
            <FormGroup>
              <Input
                className="inputMain"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="inputMain"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
            </FormGroup>
            <br />
            <Box>
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
              Join
            </Button>
            </Box>
            <br />
          </Form>
          </Box>
          </div>
    </main>
  );
};
export default Signup;