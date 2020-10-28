import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';

// Import Auth

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', firstName: '', lastName: '', displayName: '', email: '', password: '' });
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
                    <h5>Create your account:</h5>
                    <FormGroup>
                        {/* <Label>User Name</Label> */}
                        <Input type="username" placeholder="User Name (for login)" name="username" id="username" value={formState.username} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="firstName" placeholder="First Name" name="firstName" id="firstName" value={formState.firstName} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="lastName" placeholder="Last Name" name="lastName" id="lastName" value={formState.lastName} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="displayName" placeholder="Display Name (public)" name="displayName" id="displayName" value={formState.displayName} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label>Email</Label> */}
                        <Input type="email" placeholder="Email" name="email" id="email" value={formState.email} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/* <Label>Password</Label> */}
                        <Input type="password" placeholder="Password" name="password" id="password" value={formState.password} onChange={handleChange} />
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" type="submit">Join</Button>
                
                </Form>
            </div>
        </main>
    )
  
}
export default Signup;