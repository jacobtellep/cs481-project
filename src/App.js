import React from 'react';
import DailyJobForm from './components/DailyJobForm';
import JSAForm from './components/JSAForm';

const App = () => {
  return (
    // These are JSX instances of each of the components I made to create the complete form
    //<DailyJobForm />
    <div>
        <DailyJobForm />
        <br />
        <JSAForm />
    </div>
  );
};

export default App;
