import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h1>Create Forms:</h1>
        <ul>
          <li className="ui button">
            <h1>
              <Link to="/createdailyjobreport">DailyJobReport</Link>
            </h1>
          </li>
          <li className="ui button">
            <h1>
              <Link to="/createjobsafetyanalysis">Job Safety Analysis</Link>
            </h1>
          </li>
          <li className="ui button">
            <h1>
              <Link to="/createinspection">Equipment Inspection</Link>
            </h1>
          </li>
        </ul>
      </div>
    )
  );
};

export default Forms;
