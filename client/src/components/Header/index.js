import React, { Component } from 'react';

export default
class Header extends Component {
  render(){
  return (
    <div className="Header">
        <ul>
            <li><a href="#Home">Home</a></li>
            <li className="float-right"><a className="active" href="#SigninLogin">Sign Up / Log In</a></li>
            
        </ul>
    </div>
  );
}
}
