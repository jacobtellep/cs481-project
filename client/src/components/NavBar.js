import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
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
        <LogoutButton />
      </nav>
    )
  );
};

export default NavBar;
