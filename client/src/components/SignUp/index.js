import React, { Component} from 'react';
import '../SignupLogin/index.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons'
import GoogleLogin from 'react-google-login';

class Signup extends Component {
    render(){
    return (
        <Form className="login-form">

            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>User Name</Label>
                <Input type="userName" placeholder="User Name"/>
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Sign Up</Button>
            <div className="text-center pt-3">
                Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
            <GoogleLoginButton 
                className="mt-3 mb-3" 
                />
            <GoogleLogin 
            clientId="212266341985-bfblloh84d96u203r5i5b80l745ea911.apps.googleusercontent.com"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            />

            <div className="text-center">
                <a href="/sign-up">Sign Up</a>
                <span className="p-2">|</span>
                <a href="/sign-up">Forgot Password</a>
                    
                    
            </div>
        </Form>
     )
  }  
}
export default Signup;

