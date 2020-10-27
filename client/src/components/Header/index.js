import React, { Component } from 'react';

export default
class Header extends Component {
  render(){
  return (
    <div className="Header">
        <ul>
            <li className="logoText">Teach <span className="meGreen ">Me</span>To</li>
            <li><a href="/">Home</a></li>
            <li className="float-right"><a className="active" href="welcome">Sign Up | Log In</a></li>
            
        </ul>
    </div>
  );
}
}
