import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <a onClick={() => loginWithRedirect()} className="button">
        Log In
      </a>
    )
  );
};

export default LoginButton;
