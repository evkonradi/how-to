import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Auth from '../../utils/auth';
import logo from "./teach_me_to_logo-01.png";
import Search from "../Search";
import { Button, Box } from '@chakra-ui/core';


// export default
const Header = (Component) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  // render(){
  return (
    <div>
    <Navbar className="mainNav" collapseOnSelect expand="lg" bg="dark" variant="light" width="100vw">
    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav"><img className="small" src={logo} alt="logo, teach me to" /></Navbar.Toggle>

    <Navbar.Collapse  img src={logo}>
    <Nav className="mr-auto">
      {Auth.loggedIn() ? (
        <>
          {/* <NavDropdown.Item id="dropdown" href="/">Home</NavDropdown.Item> */}
          {/* <NavDropdown.Item id="dropdown"><Link className="homeLink" to="/" >Home</Link></NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/" onClick={logout}>Logout</NavDropdown.Item>
          <NavDropdown.Divider />
        </> */}
      {/* ) : (
        <>
          {/* <NavDropdown.Item id="dropdown" href="/">Home</NavDropdown.Item> */}
          {/* <NavDropdown.Item id="dropdown"><Link className="homeLink" to="/" >Home</Link></NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item id="dropdown" href="/signup">Signup</NavDropdown.Item>
          <NavDropdown.Divider />
        </>
      )}
    </Nav>
    
    </Navbar.Collapse> */} 
    <h1>Teach Me To.</h1>
                    <h3>What do you want to learn today?</h3>
    <Search></Search>
<Box maxW="md" alignContent="center" display="inline" marginRight="50px" paddingTop="28px">
    <Button
        className="center"
        size="md"
        height="40px"
        bg="#D99748"
        border="2px"
        borderColor="transparent"
        color="white"
        display="inline-block"
        _hover={{ bg: "#D99748" }}
      href="/signup"
        
      >
        Signup
        </Button>
    
        <Button
        className="center"
        size="md"
        height="40px"
        border="2px"
        borderColor="transparent"
        margin="1rem"
        color="grey"
        display="inline-block"
        _hover={{ bg: "#D99748" }}
        href="/login"
      
      >
        Login
        </Button>
        </Box>
    </Navbar>

    </div>
    
    
  );
// }
}

export default Header;