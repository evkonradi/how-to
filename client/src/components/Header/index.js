import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, NavDropdownProps, NavItem, NavItemProps, NavLink, NavLinkProps} from 'react-bootstrap'
export default
class Header extends Component {
  render(){
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
    <Navbar.Brand href="/">TeachMeTo</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
      <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
      <NavDropdown.Divider />
    {/* </NavDropdown> */}
    </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}
}
