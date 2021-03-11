import React from 'react';
import './NavBar.css';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <nav className="menu button">
        <Link to="/" className="link">
          Home{' '}
        </Link>
        <LoginButton />
      </nav>
    )
  );
};

export default NavBar;
