import React, { Component} from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons'
import GoogleLogin from 'react-google-login'

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';

class SignupLogin extends Component {

    
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj)
    }
    render(){
    return (
        <Form className="login-form">
            <h1>
                <span className="font-weight-bold">TeachMeTo.com</span>
            </h1>
            <h2 className="text-center">Welcome</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Password"/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">Log In</Button>
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
                <a href="/signup">Sign Up</a>
                <span className="p-2">|</span>
                <a href="/signup">Forgot Password</a>
                    
                    
            </div>
        </Form>
    )
  }  
}
export default SignupLogin;

 // <div class="container" id="container">
        //     <div class="form-container sign-up-container">
        //         <form action="#">
        //             <h1>Create Account</h1>
        //             <div class="social-container">
        //                 <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        //                 <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        //                 <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        //             </div>
        //             <span>or use your email for registration</span>
        //             <input type="text" placeholder="Name" />
        //             <input type="email" placeholder="Email" />
        //             <input type="password" placeholder="Password" />
        //             <button>Sign Up</button>
        //         </form>
        //     </div>
        //     <div class="form-container sign-in-container">
        //         <form action="#">
        //             <h1>Sign in</h1>
        //             <div class="social-container">
        //                 <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        //                 <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        //                 <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        //             </div>
        //             <span>or use your account</span>
        //             <input type="email" placeholder="Email" />
        //             <input type="password" placeholder="Password" />
        //             <a href="#">Forgot your password?</a>
        //             <button>Sign In</button>
        //         </form>
        //     </div>
        //     <div class="overlay-container">
        //         <div class="overlay">
        //             <div class="overlay-panel overlay-left">
        //                 <h1>Welcome Back!</h1>
        //                 <p>To keep connected with us please login with your personal info</p>
        //                 <button class="ghost" id="signIn">Sign In</button>
        //             </div>
        //             <div class="overlay-panel overlay-right">
        //                 <h1>Hello, Friend!</h1>
        //                 <p>Enter your personal details and start journey with us</p>
        //                 <button class="ghost" id="signUp">Sign Up</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
