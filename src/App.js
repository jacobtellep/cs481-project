import React from 'react';
import DailyJobReport from './components/DailyJobReport';
import GetDailyJobReport from './components/GetDailyJobReport';

const App = () => {
  return (
    // These are JSX instances of each of the components I made to create the complete form
    //<DailyJobForm />
    <div>
      <DailyJobReport />
      <br />
      <GetDailyJobReport />
    </div>
  );
};

export default App;
