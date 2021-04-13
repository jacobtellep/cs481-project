import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from './BackButton';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const CreateTask = () => {
  const [date, setDate] = useState('');
  const [contractNumber, setContractNumber] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();

  const onDataSubmit = async (date, contractNumber, title, body) => {
    const task = { date, contractNumber, title, body };

    const token = await getAccessTokenSilently({
      audience: 'http://34.229.169.195:5000/',
      scope: 'view:forms',
    });
    axios
      .post('http://34.229.169.195:5000/createtask', task, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        console.log('Successfully posted the task');
      });
  };

  const onTaskClick = () => {
    onDataSubmit(date, contractNumber, title, body);
    history.push('/datasent');
  };

  const handleClick = (event) => {
    onTaskClick();
    event.preventDefault();
  };

  return (
    <div>
      <div style={{}}>
        <BackButton path="/tasksharing" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
        }}>
        <form className="border">
          <h1>Create Task</h1>

          <div className="sub-border" style={{ padding: '10px' }}>
            <div>
              <label style={{ fontWeight: 'bold' }}>Date:</label>
              <br></br>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                style={{
                  width: '200px',
                  resize: 'none',
                  padding: '5px',
                  marginBottom: '5px',
                }}
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold' }}>Contract Number:</label>
              <br></br>
              <input
                placeholder="Contract Number"
                type="text"
                name="contractNumber"
                onChange={(event) => setContractNumber(event.target.value)}
                value={contractNumber}
                style={{
                  width: '200px',
                  resize: 'none',
                  padding: '5px',
                  marginBottom: '5px',
                }}
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold' }}>Title:</label>
              <br></br>
              <input
                placeholder="Title"
                type="text"
                name="title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                style={{
                  width: '650px',
                  resize: 'none',
                  padding: '5px',
                  marginBottom: '5px',
                }}
                required
              />
            </div>
            <div>
              <label style={{ fontWeight: 'bold' }}>Body:</label>
              <br></br>
              <textarea
                placeholder="Write the task here..."
                name="body"
                onChange={(event) => setBody(event.target.value)}
                value={body}
                style={{
                  width: '650px',
                  height: '100px',
                  resize: 'none',
                  padding: '5px',
                }}
                required></textarea>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'right',
            }}>
            <input
              style={{
                color: 'black',
                backgroundColor: 'peachpuff',
                width: '100px',
                marginLeft: '10px',
                marginTop: '10px',
                border: '2px solid black',
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
