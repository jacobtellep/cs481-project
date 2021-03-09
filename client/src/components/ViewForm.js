import React from 'react';
import { Link } from 'react-router-dom';

const Forms = () => {
  return (
    <div>
      <ul>
        <li className="home">
          <Link to="/getdailyjobreport">DailyJobReport</Link>
        </li>
        <li>
          <Link to="/getjobsafetyanalysis">Job Safety Analysis</Link>
        </li>
        <li>
          <Link to="/getinspection">Equipment Inspection</Link>
        </li>
      </ul>
    </div>
  );
};

export default Forms;
