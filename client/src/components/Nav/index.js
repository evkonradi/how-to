// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import Auth from '../../utils/auth';
// import logo from "./teach_me_to_logo-01.png";
// import Search from './Search';


// // export default
// const Header = (Component) => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   // render(){
//   return (
//     <Navbar className="mainNav" collapseOnSelect expand="lg" bg="dark" variant="light">
//     <Navbar.Toggle aria-controls="responsive-navbar-nav"><img className="small" src={logo} alt="logo, teach me to" /></Navbar.Toggle>
//     <Navbar.Collapse  img src={logo}>
//     <Nav className="mr-auto">
//       {Auth.loggedIn() ? (
//         <>
//           {/* <NavDropdown.Item id="dropdown" href="/">Home</NavDropdown.Item> */}
//           <NavDropdown.Item id="dropdown"><Link className="homeLink" to="/" >Home</Link></NavDropdown.Item>
//           <NavDropdown.Item id="dropdown" href="/profile">Profile</NavDropdown.Item>
//           <NavDropdown.Item id="dropdown" href="/" onClick={logout}>Logout</NavDropdown.Item>

//           <NavDropdown.Divider />
//         </>
//       ) : (
//         <>
//           {/* <NavDropdown.Item id="dropdown" href="/">Home</NavDropdown.Item> */}
//           <NavDropdown.Item id="dropdown"><Link className="homeLink" to="/" >Home</Link></NavDropdown.Item>
//           <NavDropdown.Item id="dropdown" href="/login">Login</NavDropdown.Item>
//           <NavDropdown.Item id="dropdown" href="/signup">Signup</NavDropdown.Item>
//           <NavDropdown.Divider />
//         </>
//       )}
//       <br/>
//     </Nav>
//     </Navbar.Collapse>
//     </Navbar>


    
//   );
// // }
// }

// export default Header;

// // import React, { useState } from 'react';
// // import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// // const Example = (props) => {
// //   const [collapsed, setCollapsed] = useState(true);

// //   const toggleNavbar = () => setCollapsed(!collapsed);

// //   return (
// //     <div>
// //       <Navbar color="faded" light>
// //         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
// //         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
// //         <Collapse isOpen={!collapsed} navbar>
// //           <Nav navbar>
// //             <NavItem>
// //               <NavLink href="/Login">Login</NavLink>
// //             </NavItem>
// //             <NavItem>
// //               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
// //             </NavItem>
// //           </Nav>
// //         </Collapse>
// //       </Navbar>
// //     </div>
// //   );
// // }

// // export default Header;