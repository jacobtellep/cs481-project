// this component is the main forms page where the user can choose to create a form or view a form

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BackButton from "./BackButton";

const Forms = () => {
  // this is a boolean provided by Auth0 that checks of the user is authenticated before allowing
  // the encapsulated component to render
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <div>
          {/* back button component with the relevant path specified as a prop */}
          <BackButton path="/forms" />
        </div>
        <div
          style={{
            backgroundColor: "ghostwhite",
            position: "absolute",
            left: "50%",
            marginLeft: "-100px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid black",
            paddingBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h1>Create Forms:</h1>

          <h1
            // these h1 tags are styled as buttons and are what the user clicks on to choose which form they want to create
            className="ui button"
            style={{
              backgroundColor: "peachpuff",
              width: "200px",
              margin: "10px",
              border: "2px solid black",
            }}
          >
            {/* these link tags are JSX tags provided by react-router-dom to route the user to different pages within the app */}
            <Link to="/createdailyjobreport">Daily Job Report</Link>
          </h1>

          <h1
            className="ui button"
            style={{
              backgroundColor: "peachpuff",
              width: "200px",
              marginLeft: "10px",
              marginRight: "10px",
              border: "2px solid black",
            }}
          >
            <Link to="/createjobsafetyanalysis">Job Safety Analysis</Link>
          </h1>

          <h1
            className="ui button"
            style={{
              backgroundColor: "peachpuff",
              width: "200px",
              margin: "10px",
              border: "2px solid black",
            }}
          >
            <Link to="/createinspection">Equipment Inspection</Link>
          </h1>
        </div>
      </div>
    )
  );
};

export default Forms;
