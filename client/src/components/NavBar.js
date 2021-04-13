import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './NavBar.css';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const NavBar = () => {
  const { getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const protectPricing = async () => {
    const token = await getAccessTokenSilently({
      audience: 'http://34.229.169.195:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://34.229.169.195:5000/pricing', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        if (error.response) {
          history.push('/wrongpermissions');
        }
      });
  };

  const protectTasks = async () => {
    const token = await getAccessTokenSilently({
      audience: 'http://34.229.169.195:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://34.229.169.195:5000/tasksharing', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        if (error.response) {
          history.push('/wrongpermissions');
        }
      });
  };

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

          <Link to="/pricing" className="link" onClick={protectPricing}>
            Pricing{' '}
          </Link>

          <Link to="/tasksharing" className="link" onClick={protectTasks}>
            Tasks{' '}
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
