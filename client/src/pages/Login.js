import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import GoogleLogin from 'react-google-login';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import { valueFromAST } from 'graphql';

// import { render } from 'node-sass';

// Import Auth

const Login = (props, Component) => {
    const [formState, setFormState ] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

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
            const { data } = await login({
                variable: { ...formState }
            });
            // (Auth Login goes here)
        } catch (e) {
            console.error(e);
        }
        // Clear form:
        setFormState({
            email: '',
            password: ''
        });
    };
    
    const responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        // this.signup(response, "google");
    };

    // render(){
        return (
            <main>
                <div>
                    <Form className="login-form" onSubmit={handleFormSubmit}>
                        <h1>
                            <span className="font-weight-bold">TeachMeTo.com</span>
                        </h1>
                        <h2 className="text-center">WELCOME</h2>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" placeholder="Email" name="email" id="email" value={formState.email} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" placeholder="Password" name="password" id="password" value={formState.password} onChange={handleChange}/>
                        </FormGroup>
                        <Button className="btn-lg btn-dark btn-block">LOGIN</Button>
                        <div className="text-center pt-3">
                            Or continue with your social account
                        </div>
                    
                        <div className="text-center">
                        <GoogleLogin 
                        clientId="212266341985-bfblloh84d96u203r5i5b80l745ea911.apps.googleusercontent.com"
                        
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />
                    </div>
                        <div className="text-center">
                            <a href="/signup">Sign Up</a>
                            <span className="p-2">|</span>
                            <a href="/signup">Forgot Password</a>        
                        </div>
                    </Form>
                    {error && <div>Login failed</div>}
                </div>
            </main>
        )
    // };
}

export default Login;