//comment
import React from 'react';

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
              <Link to="/home">Home</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
        </div>
    )
};

export default Nav;