import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    render(){
    return (
        <Form className="login-form">
            <h1>
                <span className="font-weight-bold">TeachMeTo.com</span>
            </h1>
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
            

            <div className="text-center">
                <a href="/signup">Sign Up</a>
                <span className="p-2">|</span>
                <a href="/signup">Forgot Password</a>
                    
                    
            </div>
        </Form>
     )
  }  
}
export default Signup;