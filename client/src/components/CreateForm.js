import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Forms = () => {
  return (
    <div>
      <ul>
        <li className="home">
          <Link to="/createdailyjobreport">DailyJobReport</Link>
        </li>
        <li>
          <Link to="/createjobsafetyanalysis">Job Safety Analysis</Link>
        </li>
        <li>
          <Link to="/createinspection">Equipment Inspection</Link>
        </li>
      </ul>
    </div>
  );
};

export default Forms;
