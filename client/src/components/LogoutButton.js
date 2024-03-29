import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <a
        onClick={() => logout({ returnTo: 'http://localhost:3000/logout' })}
        className="button">
        Logout
      </a>
    )
  );
};

export default LogoutButton;
