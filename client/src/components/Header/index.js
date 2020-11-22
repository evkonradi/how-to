import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Auth from '../../utils/auth';
import { Box } from '@chakra-ui/core';
import Search from "../../components/Search";
import MainNav from "../../components/MainNav";


// export default
const Header = (Component) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  // render(){
  return (
    <div>
 
    
    <MainNav></MainNav>




</div>

    
  );
// }
}

export default Header;