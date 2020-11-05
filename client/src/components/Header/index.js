import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Auth from '../../utils/auth';
import logo from "./teach_me_to_logo-01.png";


// export default
const Header = (Component) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  // render(){
  return (
    <Navbar className="mainNav" collapseOnSelect expand="lg" bg="dark" variant="light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav"><img className="small" src={logo} alt="logo, teach me to" /></Navbar.Toggle>
    <Navbar.Collapse  img src={logo}>
    <Nav className="mr-auto">
      {Auth.loggedIn() ? (
        <>
          {/* <NavDropdown.Item id="dropdown" href="/">Home</NavDropdown.Item> */}
          <NavDropdown.Item id="dropdown"><Link className="homeLink" to="/" >Home</Link></NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/" onClick={logout}>Logout</NavDropdown.Item>
        </>
      ) : (
        <>
          {/* <NavDropdown.Item id="dropdown" href="/">Home</NavDropdown.Item> */}
          <NavDropdown.Item id="dropdown"><Link className="homeLink" to="/" >Home</Link></NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/signup">Signup</NavDropdown.Item>
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