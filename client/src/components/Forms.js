import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Forms.css';
import BackButton from './BackButton';

const Forms = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <div>
          <BackButton path="/" />
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
          <h1>Forms:</h1>
          <h1
            className="ui button"
            style={{
              color: 'black',
              backgroundColor: 'peachpuff',
              width: '150px',
              margin: '10px',
              // fontSize: 'x-large',
              border: '2px solid black',
            }}>
            <Link to="/createform">Create Form</Link>
          </h1>

          <h1
            className="ui button"
            style={{
              color: 'black',
              backgroundColor: 'peachpuff',
              width: '150px',
              marginLeft: '10px',
              marginRight: '10px',
              // fontSize: 'x-large',
              border: '2px solid black',
            }}>
            <Link to="/viewform">View Form</Link>
          </h1>
        </div>
      </div>
    )
  );
};

export default Forms;
