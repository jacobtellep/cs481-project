import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Forms = () => {
  return (
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
  );
};

export default Forms;
