import React from 'react';
import JobInfo from './components/JobInfo';
import WeatherDelay from './components/WeatherDelay';
import ProjectDelay from './components/ProjectDelay';
import BidWork from './components/BidWork';
import JobDescription from './components/JobDescription';

const App = () => {
  return (
    // These are JSX instances of each of the components I made to create the complete form
    <div>
      <JobInfo />
      <WeatherDelay />
      <WeatherDelay />
      <WeatherDelay />
      <WeatherDelay />
      <br />
      <ProjectDelay />
      <ProjectDelay />
      <ProjectDelay />
      <ProjectDelay />
      <br />
      <BidWork />
      <BidWork />
      <BidWork />
      <BidWork />
      <BidWork />
      <BidWork />
      <BidWork />
      <BidWork />
      <br />
      <JobDescription />
    </div>
  );
};

export default App;
