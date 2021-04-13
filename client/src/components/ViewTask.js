import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from './BackButton';

const ViewTask = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    axios.get('http://34.229.169.195:5000/viewtask', {}).then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    getTasks();
  });

  return (
    <div>
      <div>
        <BackButton path="/tasksharing" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h1>Tasks</h1>
        {tasks
          .map((task) => (
            <div>
              <div className="border">
                <p>
                  <b>Date: </b>
                  {task.date}
                </p>{' '}
                <p>
                  <b>Contract Number: </b>
                  {task.contract_number}
                </p>
                <p>
                  <b>Title: </b>
                  <span>{task.title}</span>
                </p>
                <p
                  style={{ padding: '5px', marginTop: '5px' }}
                  className="sub-border">
                  {task.body}
                </p>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default ViewTask;
