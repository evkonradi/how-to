import React, { Component } from 'react';
import {Navbar, Nav, Search} from 'reactstrap'
export default
class Header extends Component {
  render(){
  return (
    <div className="Header">
        <ul>            
            <li className="logoText">Teach <span className="meGreen ">Me</span>To</li>
            <li className="float-right">
                <a href="/signup">Sign Up</a>
                <span className="p-2">|</span>
                <a href="/login">Login</a>
            </li>
            
        </ul>
    </div>
  );
}
}
