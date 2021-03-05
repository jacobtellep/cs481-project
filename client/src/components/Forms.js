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
            <Link to="/createform">Create Form</Link>
          </li>
          <li>
            <Link to="/viewform">View Form</Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default Forms;
