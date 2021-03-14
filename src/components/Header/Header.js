import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './Header.css';

const Header = () => {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (  
    <div className="header">
      <h1 className="title">ElGamal <sub>Algorithm</sub></h1>
      <div className="line"></div>
      {!isAuthenticated ? (
        <button className="btn" onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <button className="btn" onClick={() => logout()}>Logout</button>
      )}
    </div>
  );
}
 
export default Header;