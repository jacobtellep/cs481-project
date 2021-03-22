import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Forms = () => {
  return (
    <div>
      <h1>View Forms:</h1>
      <ul>
        <li className="ui button">
          <h1>
            <Link to="/getdailyjobreport">DailyJobReport</Link>
          </h1>
        </li>
        <li className="ui button">
          <h1>
            <Link to="/getjobsafetyanalysis">Job Safety Analysis</Link>
          </h1>
        </li>
        <li className="ui button">
          <h1>
            <Link to="/getinspection">Equipment Inspection</Link>
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Forms;
