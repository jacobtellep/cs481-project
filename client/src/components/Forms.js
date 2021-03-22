import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Forms.css';

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <ul>
          <li className="ui button">
            <h1 style={{ color: 'black' }}>
              <Link to="/createform">Create Form</Link>
            </h1>
          </li>

          <li className="ui button">
            <h1>
              <Link to="/viewform">View Form</Link>
            </h1>
          </li>
        </ul>
      </div>
    )
  );
};

export default Forms;
