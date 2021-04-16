import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Forms.css';
import BackButton from './BackButton';
import axios from 'axios';

const Forms = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  let history = useHistory();

  const getForms = async () => {
    const token = await getAccessTokenSilently({
      audience: 'http://ec2-54-89-63-156.compute-1.amazonaws.com:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://ec2-54-89-63-156.compute-1.amazonaws.com:5000/getforms', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        if (error.response) {
          history.push('/wrongpermissions');
        }
      });
  };

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
            <Link onClick={getForms} to="/viewform">
              View Form
            </Link>
          </h1>
        </div>
      </div>
    )
  );
};

export default Forms;
