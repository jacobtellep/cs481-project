// this component is used as the back button throughout the application

import React from "react";
import { Link } from "react-router-dom";
import logo from "./arrow-left.svg";

// pass properties parameter so that the path of the back button can be specified to the relevant path
const BackButton = (props) => {
  return (
    <Link to={props.path}>
      <img
        alt=""
        style={{
          width: "25px",
          margin: "10px",
        }}
        src={logo}
      />
    </Link>
  );
};

export default BackButton; // in order to use components in the application it must be exported.
