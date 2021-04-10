import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Forms.css';
import BackButton from './BackButton';
import axios from 'axios';

const TaskSharing = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const history = useHistory();

  const createTask = async () => {
    const token = await getAccessTokenSilently({
      audience: 'http://localhost:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://localhost:5000/createtask', {
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
        <h1>Tasks:</h1>
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
          <Link to="/createtask" onClick={createTask}>
            Create Task
          </Link>
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
          <Link to="/viewtask">View Task</Link>
        </h1>
      </div>
    </div>
  );
};

export default TaskSharing;
