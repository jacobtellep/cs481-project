import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Pricing = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <ul>
          <li className="home">
            <Link to="/createpricing">Create Pricing</Link>
          </li>
          <li>
            <Link to="/viewpricing">View Pricing</Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default Pricing;
