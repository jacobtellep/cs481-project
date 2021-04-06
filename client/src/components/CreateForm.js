import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
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
        <h1>Create Forms:</h1>

        <h1
          className="ui button"
          style={{
            backgroundColor: 'peachpuff',
            width: '200px',
            margin: '10px',
            border: '2px solid black',
          }}>
          <Link to="/createdailyjobreport">DailyJobReport</Link>
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
          <Link to="/createjobsafetyanalysis">Job Safety Analysis</Link>
        </h1>

        <h1
          className="ui button"
          style={{
            backgroundColor: 'peachpuff',
            width: '200px',
            margin: '10px',
            border: '2px solid black',
          }}>
          <Link to="/createinspection">Equipment Inspection</Link>
        </h1>
      </div>
    )
  );
};

export default Forms;
