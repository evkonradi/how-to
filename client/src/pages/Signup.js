import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

// Import Auth

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' })
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
        <Form className="login-form" onSubmit={handleFormSubmit}>
            <h1>
                <span className="font-weight-bold">TeachMeTo.com</span>
            </h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>User Name</Label>
                <Input type="username" placeholder="User Name" name="username" id="username" value={formState.username} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" name="email" id="email" value={formState.email} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password" name="password" id="password" value={formState.password} onChange={handleChange} />
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block" type="submit">Sign Up</Button>
           
        </Form>
    )
  
}
export default Signup;