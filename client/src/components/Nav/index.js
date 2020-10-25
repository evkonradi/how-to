//comment
import React from 'react';
import Auth from '../../utils/auth';
import Home from '../../pages/Home'
const Nav = () => {
    
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    return(
        <div>
             <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              {/* <Link to="/">Home</Link> */}
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              {/* <Link to="/"> */}
                <div>

                Login
                </div>
                {/* </Link> */}
              {/* <Link to="/"> */}
                <div>
                Signup
                </div>
                
                {/* </Link> */}
            </>
          )}
        </nav>
        </div>
    )
};

export default Nav;