import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import Auth from '../../utils/auth';
import Search from '../Search';
// import logo from "./teach_me_to_logo-01.png";


// export default
const Header = (Component) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  // render(){
  return (
    <Nav className="mainNav">
      {Auth.loggedIn() ? (
        <>
          <Nav.Item><Link className="homeLink" to="/">HOME</Link></Nav.Item>
          <Nav.Item><Link className="profileLink" to="/profile" >PROFILE</Link></Nav.Item>
          <Nav.Item><Link className="logoutLink" to="/logout" onClick={logout}>LOGOUT</Link></Nav.Item>  
          <Search></Search>  
        </>
      ) : (
        <>
          <Nav.Item><Link className="homeLink" to="/" >HOME</Link></Nav.Item>
          <Nav.Item><Link className="loginLink" to="/login">LOGIN</Link></Nav.Item>
          <Nav.Item><Link className="signupLink" to="/signup">SIGNUP</Link></Nav.Item>
          <Search></Search> 
        </>
      )}
    </Nav>


    
  );
// }
}

export default Header;

// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// const Example = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//       <Navbar color="faded" light>
//         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//         <Collapse isOpen={!collapsed} navbar>
//           <Nav navbar>
//             <NavItem>
//               <NavLink href="/Login">Login</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;