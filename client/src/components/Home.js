import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    axios.get('http://localhost:5000/viewtask', {}).then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    getTasks();
  });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
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

export default Home;
