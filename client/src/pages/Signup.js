import React, { Component, useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from "@chakra-ui/core";

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

// Import Auth

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(formState.username + " has signed up using email " + formState.email)
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            // Auth login
        } catch (e) {
            console.error(e);
        }
    };
   
    return (
        <main>
            <div>
                <Form className="login-form" onSubmit={handleFormSubmit}>
                    <h1>
                        <span className="font-weight-bold text-center">Welcome!</span>
                    </h1>
                    <h4>Sign up</h4>
                    <FormGroup>
                        {/* <Label>User Name</Label> */}
                        <Input type="username" placeholder="User Name" name="username" id="username" value={formState.username} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label>Email</Label> */}
                        <Input type="email" placeholder="Email" name="email" id="email" value={formState.email} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label>Password</Label> */}
                        <Input type="password" placeholder="Password" name="password" id="password" value={formState.password} onChange={handleChange} />
                    </FormGroup>
                    <Button
  size="lg"
  height="46px"
  width="200px"
  border="2px"
//   borderColor="green.500"
  color="white"
  bg="#5C6B73"
  _hover={{ bg:"#D99748" }}
  type="submit"
>
  Join
</Button>
                    
                
                </Form>
            </div>
        </main>
    )
  
}
export default Signup;