import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

const Forms = () => {
  return (
    <div
      style={{
        backgroundColor: 'ghostwhite',
        position: 'absolute',
        left: '50%',
        marginLeft: '-100px',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid black',
        paddingBottom: '10px',
      }}>
      <h1>Create Forms:</h1>

      <h1
        className="ui button"
        style={{
          backgroundColor: 'peachpuff',
          width: '200px',
          margin: '10px',
          border: '2px solid black',
        }}>
        <Link to="/getdailyjobreport">DailyJobReport</Link>
      </h1>

      <h1
        className="ui button"
        style={{
          backgroundColor: 'peachpuff',
          width: '200px',
          marginLeft: '10px',
          marginRight: '10px',
          border: '2px solid black',
        }}>
        <Link to="/getjobsafetyanalysis">Job Safety Analysis</Link>
      </h1>

      <h1
        className="ui button"
        style={{
          backgroundColor: 'peachpuff',
          width: '200px',
          margin: '10px',
          border: '2px solid black',
        }}>
        <Link to="/getinspection">Equipment Inspection</Link>
      </h1>
    </div>
  );
};

export default Forms;
