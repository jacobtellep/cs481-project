import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="menu button">
      <Link to="/" className="link">
        Home{' '}
      </Link>

      <Link to="/forms" className="link">
        Forms{' '}
      </Link>

      <Link to="/pricing" className="link">
        Pricing{' '}
      </Link>

      <LogoutButton />
      <LoginButton />
    </nav>
  );
};

export default NavBar;
