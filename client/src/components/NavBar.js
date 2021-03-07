import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
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
      </nav>
    )
  );
};

export default NavBar;
