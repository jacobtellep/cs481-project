import React from "react";
import "./NavBar.css";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <nav className="menu button">
        <LoginButton />
      </nav>
    )
  );
};

export default NavBar;
