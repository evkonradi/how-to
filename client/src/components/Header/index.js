import React, { Component } from 'react';

export default
class Header extends Component {
  render(){
  return (
    <div className="Header">
        <ul>
            <li><a href="/">Home</a></li>
            <li className="logoText">Teach <span className="meGreen ">Me</span>To</li>
            <li className="float-right">
                <a href="/signup">Sign Up</a>
                <span className="p-2">|</span>
                <a href="/welcome">Login</a>
            </li>
            
        </ul>
    </div>
  );
}
}
