import React, { Component } from 'react';
import {Navbar, Nav, Search} from 'reactstrap'
export default
class Header extends Component {
  render(){
  return (
    <div className="Header">
        <ul>
            <li><a href="/"><span>📚</span> TeachMeTo</a></li>
            <li className="float-right"><a className="active" href="login">Sign Up | Log In</a></li>
            
        </ul>
    </div>
  );
}
}
