import React from "react";
// this page simply tells the user that data was successfully sent
// in different parts of the app whenever data is sent to the backend successfully the app routes to this page
class DataSent extends React.Component {
  render() {
    return (
      <div
        className="border"
        style={{ paddingLeft: "20px", paddingTop: "20px" }}
      >
        <h1>Data Sent successfully. You may now leave this page.</h1>
      </div>
    );
  }
}

export default DataSent;
