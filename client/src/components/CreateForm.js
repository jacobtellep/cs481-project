import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
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
    )
  );
};

export default Forms;
