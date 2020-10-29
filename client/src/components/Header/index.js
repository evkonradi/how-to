import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Auth from '../../utils/auth';

// export default
const Header = (Component) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  // render(){
  return (
    <Navbar className="mainNav" collapseOnSelect expand="lg" bg="dark" variant="light">
    <Navbar.Brand href="/"><img className="small" src="./images/teach_me_to_logo-01.png"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {Auth.loggedIn() ? (
        <>
          <NavDropdown.Item>
            <a href="/" onClick={logout} color="#9DB4C0">
            Logout
            </a>
          </NavDropdown.Item>
        </>
      ) : (
        <>
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
          <NavDropdown.Divider />
        </>
      )}
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
// }
}

export default Header;