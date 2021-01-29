import React from 'react';
import JobInfo from './dailyjobreport/JobInfo';
import WeatherDelay from './dailyjobreport/WeatherDelay';
import ProjectDelay from './dailyjobreport/ProjectDelay';
import BidWork from './dailyjobreport/BidWork'
import JobDescription from './dailyjobreport/JobDescription';

class DailyJobForm extends React.Component {
 render(){
     return (
     // These are JSX instances of each of the components I made to create the complete form
     <div>
        <h1 style={{paddingLeft: "20px"}}>Daily Job Report</h1>
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
};

export default DailyJobForm;
