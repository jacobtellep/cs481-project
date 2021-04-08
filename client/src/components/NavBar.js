import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavBar = () => {
  return (
    <div>
      <nav className="menu">
        <div className="menu button">
          <Link to="/" className="link">
            Home{' '}
          </Link>

          <Link to="/forms" className="link">
            Forms{' '}
          </Link>

          <Link to="/pricing" className="link">
            Pricing{' '}
          </Link>
        </div>
        <div className="menu button">
          <LogoutButton />
          <LoginButton />
        </div>
      </nav>
      <div className="log menu"></div>
    </div>
  );
};

export default NavBar;
