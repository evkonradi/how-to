import React from 'react';
import Auth from '../../utils/auth';
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