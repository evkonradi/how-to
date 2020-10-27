import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import GoogleLogin from 'react-google-login';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

// import { render } from 'node-sass';

// Import Auth

const Login = (props, Component) => {
    const [formState, setFormState ] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    
    
    const responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        // this.signup(response, "google");
    };

    // render(){
        return (
            <Form className="login-form">
                <h1>
                    <span className="font-weight-bold">TeachMeTo.com</span>
                </h1>
                <h2 className="text-center">WELCOME</h2>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"/>
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
        )
    // };
}

export default Login;