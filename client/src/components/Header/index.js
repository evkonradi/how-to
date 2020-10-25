import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
 

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Teach <span style="color:green">me</span> to</h1>
        </Link>

       
      </div>
    </header>
  );
};

// export default Header;
// import React from 'react';
// import { Navbar } from '../../common' ;

// import './Header.css';

// function Header () {

//   return (
//     <section className="header">
//       <section className="header-top">
//         <section className="header-top__logo">
//           <a href="/" className="header-logo">LOGO</a>
//         </section>
//         <section className="header-top__navbar">
//           <section className="header-top__navigation">
//             <Navbar />
//           </section>
//           <hr className="header-top__seperator" />
//         </section>
//       </section>
//       <section className="header-bottom">
//         <section className="header-bottom__phone">
//           99999999999
//         </section>
//         <section className="header-bottom__email">
//           shop.info@gmail.com
//         </section>
//       </section>
//     </section>
//   )
// }

export default Header;