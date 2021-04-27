import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

// import './NavBar.css';

const Forms = () => {
  return (
    <div>
      <div>
        <BackButton path="forms" />
      </div>
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
          borderRadius: '5px',
        }}>
        <h1>View Forms:</h1>

        <h1
          className="ui button"
          style={{
            backgroundColor: 'peachpuff',
            width: '200px',
            margin: '10px',
            border: '2px solid black',
          }}>
          <Link to="/getdailyjobreport">Daily Job Report</Link>
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
    </div>
  );
};

export default Forms;
