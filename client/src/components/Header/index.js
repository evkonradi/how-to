import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import Auth from '../../utils/auth';
// import logo from "./teach_me_to_logo-01.png";


// export default
const Header = (Component) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  // render(){
  return (
    <Nav className="mainNav" expand="lg" bg="black" variant="light">
      {Auth.loggedIn() ? (
        <>
          <Nav.Item><Link className="homeLink" to="/" >Home</Link></Nav.Item>
          <Nav.Item><Link className="profileLink" to="/profile" >Profile</Link></Nav.Item>
          <Nav.Item><Link className="logoutLink" to="/logout" onClick={logout}>Logout</Link></Nav.Item>    
        </>
      ) : (
        <>
          <Nav.Item><Link className="homeLink" to="/" >Home</Link></Nav.Item>
          <Nav.Item><Link className="loginLink" to="/login">Login</Link></Nav.Item>
          <Nav.Item><Link className="signupLink" to="/signup">Signup</Link></Nav.Item>
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