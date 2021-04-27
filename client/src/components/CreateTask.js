import React, { useState } from "react"; // useState hook is also imported with react
import { useHistory } from "react-router-dom"; // useHistory hook is used to route to a new page
import BackButton from "./BackButton";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const CreateTask = () => {
  // state variables. These are used to set a variable and capture data that is relevant to the functional component
  // this is done with a single state object inside of class components
  const [date, setDate] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  // this is a function provided by Auth0 that gets the JWT token that is used
  // during the current session
  const { getAccessTokenSilently } = useAuth0();

  const onDataSubmit = async (date, contractNumber, title, body) => {
    const task = { date, contractNumber, title, body }; // the fields of the task data base table correspond to these values. The are stored in a single task variable

    const token = await getAccessTokenSilently({
      // provide an audience and a scope to the JWT token.
      // this is required for limiting permissions on the component
      audience: "http://localhost:5000/",
      scope: "view:forms",
    });
    // axios is the library that is used for http requests.  It is optional but simplifies the code
    axios
      .post("http://localhost:5000/createtask", task, {
        // send an authorization header to the corresponding backend endpoint with the token that was retrieved with getAccessTokenSilently above
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log("Successfully posted the task");
      });
  };

  const onTaskClick = () => {
    // on data submit is called with the state values provided as arguments. The parameter names and the state names are the same for simplicity
    onDataSubmit(date, contractNumber, title, body);
    // when the data is successfully sent to the backend then the app is routed to the /datasent page
    history.push("/datasent");
  };

  const handleClick = (event) => {
    // this function simply calls onTaskClick while also preventing the default functionality of a form which is to rerender the page
    onTaskClick();
    event.preventDefault();
  };

  return (
    <div>
      <div style={{}}>
        {/* back button with the relevant path passed to it as a prop */}
        <BackButton path="/tasksharing" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <form className="border">
          <h1>Create Task</h1>

          <div className="sub-border" style={{ padding: "10px" }}>
            <div>
              <label style={{ fontWeight: "bold" }}>Date:</label>
              <br></br>
              <input
                type="date"
                name="date"
                value={date}
                // when the value of the input changes, the data state value is set to the value of the input.
                onChange={(event) => setDate(event.target.value)}
                style={{
                  width: "200px",
                  resize: "none",
                  padding: "5px",
                  marginBottom: "5px",
                }}
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Contract Number:</label>
              <br></br>
              <input
                placeholder="Contract Number"
                type="text"
                name="contractNumber"
                onChange={(event) => setContractNumber(event.target.value)}
                value={contractNumber}
                style={{
                  width: "200px",
                  resize: "none",
                  padding: "5px",
                  marginBottom: "5px",
                }}
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Title:</label>
              <br></br>
              <input
                placeholder="Title"
                type="text"
                name="title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                style={{
                  width: "650px",
                  resize: "none",
                  padding: "5px",
                  marginBottom: "5px",
                }}
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Body:</label>
              <br></br>
              <textarea
                placeholder="Write the task here..."
                name="body"
                onChange={(event) => setBody(event.target.value)}
                value={body}
                style={{
                  width: "650px",
                  height: "100px",
                  resize: "none",
                  padding: "5px",
                }}
                required
              ></textarea>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <input
              style={{
                color: "black",
                backgroundColor: "peachpuff",
                width: "100px",
                marginLeft: "10px",
                marginTop: "10px",
                border: "2px solid black",
              }}
              type="submit"
              className="ui button"
              onClick={handleClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
