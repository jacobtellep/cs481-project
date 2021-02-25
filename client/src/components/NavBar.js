import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    // The home button is not working

    <nav className="menu">
      <ul>
        <li className="menu-items">
          <Link to="/" className="link">
            Home{" "}
          </Link>
        </li>
        <li className="menu-items">
          <Link to="/forms" className="link">
            Forms{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
