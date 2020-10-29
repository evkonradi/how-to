import React, { Component } from 'react';

import { Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default
class Header extends Component {
  render(){
  return (
    <Navbar className="mainNav" collapseOnSelect expand="lg" bg="dark" variant="light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav"><img className="small" src="./images/teach_me_to_logo-01.png" /></Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown.Item href="/">Home</NavDropdown.Item>
      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
      <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
      <NavDropdown.Divider />
    </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}
}
