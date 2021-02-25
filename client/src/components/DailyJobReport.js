import React from 'react';
import axios from 'axios';
import './DailyJobReport.css';

class DailyJobReport extends React.Component {
  state = {
    date: '',
    customer: '',
    project: '',
    contractNumber: '',
    foreman: '',
    weatherNotes: '',
    weatherStart: '',
    weatherEnd: '',
    weatherNotes1: '',
    weatherStart1: '',
    weatherEnd1: '',
    weatherNotes2: '',
    weatherStart2: '',
    weatherEnd2: '',
    weatherNotes3: '',
    weatherStart3: '',
    weatherEnd3: '',
    projectNotes: '',
    projectStart: '',
    projectEnd: '',
    projectNotes1: '',
    projectStart1: '',
    projectEnd1: '',
    projectNotes2: '',
    projectStart2: '',
    projectEnd2: '',
    projectNotes3: '',
    projectStart3: '',
    projectEnd3: '',
    employeeName: '',
    hours: '',
    jobNumber: '',
    employeeName1: '',
    hours1: '',
    jobNumber1: '',
    employeeName2: '',
    hours2: '',
    jobNumber2: '',
    employeeName3: '',
    hours3: '',
    jobNumber3: '',
    employeeName4: '',
    hours4: '',
    jobNumber4: '',
    employeeName5: '',
    hours5: '',
    jobNumber5: '',
    employeeName6: '',
    hours6: '',
    jobNumber6: '',
    employeeName7: '',
    hours7: '',
    jobNumber7: '',
    jobDescription: '',

    dailyJobReport: [],
  };

  componentDidMount = () => {
    this.setState({
      date: '03/02/1993',
      customer: 'Jake Tellep',
      project: 'Electrical',
      contractNumber: '123',
      foreman: 'Greg Carte',
      weatherNotes: 'Rain',
      weatherStart: '2:00 PM',
      weatherEnd: '3:00 PM',
      weatherNotes1: 'Snow',
      weatherStart1: '7:00 AM',
      weatherEnd1: '9:00 AM',
      weatherNotes2: 'Hail',
      weatherStart2: '5:00 PM',
      weatherEnd2: '8:00 PM',
      weatherNotes3: 'Fire',
      weatherStart3: '4:00 AM',
      weatherEnd3: '7:00 AM',
      projectNotes: 'equipent breakdown',
      projectStart: '7:00 AM',
      projectEnd: '9:00 AM',
      projectNotes1: 'out of material',
      projectStart1: '2:00 PM',
      projectEnd1: '3:00 PM',
      projectNotes2: 'fueling',
      projectStart2: '3:00 PM',
      projectEnd2: '3:30 PM',
      projectNotes3: 'Equipment maintenance',
      projectStart3: '4:00 PM',
      projectEnd3: '4:45 PM',
      employeeName: 'George Martin',
      hours: '8',
      jobNumber: '1',
      employeeName1: 'Stephen King',
      hours1: '9',
      jobNumber1: '2',
      employeeName2: 'Patrick Rothfuss',
      hours2: '9',
      jobNumber2: '3',
      employeeName3: 'Steven Erikson',
      hours3: '10',
      jobNumber3: '4',
      employeeName4: 'Robert Jordan',
      hours4: '12',
      jobNumber4: '5',
      employeeName5: 'Brandon Sanderson',
      hours5: '10',
      jobNumber5: '6',
      employeeName6: 'Joe Abercrombie',
      hours6: '8',
      jobNumber6: '7',
      employeeName7: 'Dan Simmons',
      hours7: '10',
      jobNumber7: '8',
      jobDescription:
        'This job will accomplish building a new substation in Beckley',
    });
  };

  onDataSubmit = (
    date,
    customer,
    project,
    contractNumber,
    foreman,
    weatherNotes,
    weatherStart,
    weatherEnd,
    weatherNotes1,
    weatherStart1,
    weatherEnd1,
    weatherNotes2,
    weatherStart2,
    weatherEnd2,
    weatherNotes3,
    weatherStart3,
    weatherEnd3,
    projectNotes,
    projectStart,
    projectEnd,
    projectNotes1,
    projectStart1,
    projectEnd1,
    projectNotes2,
    projectStart2,
    projectEnd2,
    projectNotes3,
    projectStart3,
    projectEnd3,
    employeeName,
    hours,
    jobNumber,
    employeeName1,
    hours1,
    jobNumber1,
    employeeName2,
    hours2,
    jobNumber2,
    employeeName3,
    hours3,
    jobNumber3,
    employeeName4,
    hours4,
    jobNumber4,
    employeeName5,
    hours5,
    jobNumber5,
    employeeName6,
    hours6,
    jobNumber6,
    employeeName7,
    hours7,
    jobNumber7,
    jobDescription
  ) => {
    // this is where the data is sent to the backend
    axios
      .post('http://localhost:5000/dailyjobreport', {
        date: date,
        customer: customer,
        project: project,
        contractNumber: contractNumber,
        foreman: foreman,
        weatherNotes:
          weatherNotes +
          '\n' +
          weatherNotes1 +
          '\n' +
          weatherNotes2 +
          '\n' +
          weatherNotes3,
        weatherStart:
          weatherStart +
          '\n' +
          weatherStart1 +
          '\n' +
          weatherStart2 +
          '\n' +
          weatherStart3,
        weatherEnd:
          weatherEnd +
          '\n' +
          weatherEnd1 +
          '\n' +
          weatherEnd2 +
          '\n' +
          weatherEnd3,
        projectNotes:
          projectNotes +
          '\n' +
          projectNotes1 +
          '\n' +
          projectNotes2 +
          '\n' +
          projectNotes3,
        projectStart:
          projectStart +
          '\n' +
          projectStart1 +
          '\n' +
          projectStart2 +
          '\n' +
          projectStart3,
        projectEnd:
          projectEnd +
          '\n' +
          projectEnd1 +
          '\n' +
          projectEnd2 +
          '\n' +
          projectEnd3,
        employeeName:
          employeeName +
          '\n' +
          employeeName1 +
          '\n' +
          employeeName2 +
          '\n' +
          employeeName3 +
          '\n' +
          employeeName4 +
          '\n' +
          employeeName5 +
          '\n' +
          employeeName6 +
          '\n' +
          employeeName7,
        hours:
          hours +
          '\n' +
          hours1 +
          '\n' +
          hours2 +
          '\n' +
          hours3 +
          '\n' +
          hours4 +
          '\n' +
          hours5 +
          '\n' +
          hours6 +
          '\n' +
          hours7,
        jobNumber:
          jobNumber +
          '\n' +
          jobNumber1 +
          '\n' +
          jobNumber2 +
          '\n' +
          jobNumber3 +
          '\n' +
          jobNumber4 +
          '\n' +
          jobNumber5 +
          '\n' +
          jobNumber6 +
          '\n' +
          jobNumber7,
        jobDescription: jobDescription,
      })
      .then(() => {
        console.log('successfully sent the data');
      });
  }; // end of onDataSubmit

  onChange = (event) => {
    // checks for a change in each component, with each change, updates the state accordingly
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value }); //sets the value attribute of each component
  };

  dataClick = () => {
    // this function calls the onDateSubmit function which gets rid of the circular call error and sends the data to the database
    this.onDataSubmit(
      this.state.date,
      this.state.customer,
      this.state.project,
      this.state.contractNumber,
      this.state.foreman,
      this.state.weatherNotes,
      this.state.weatherStart,
      this.state.weatherEnd,
      this.state.weatherNotes1,
      this.state.weatherStart1,
      this.state.weatherEnd1,
      this.state.weatherNotes2,
      this.state.weatherStart2,
      this.state.weatherEnd2,
      this.state.weatherNotes3,
      this.state.weatherStart3,
      this.state.weatherEnd3,
      this.state.projectNotes,
      this.state.projectStart,
      this.state.projectEnd,
      this.state.projectNotes1,
      this.state.projectStart1,
      this.state.projectEnd1,
      this.state.projectNotes2,
      this.state.projectStart2,
      this.state.projectEnd2,
      this.state.projectNotes3,
      this.state.projectStart3,
      this.state.projectEnd3,
      this.state.employeeName,
      this.state.hours,
      this.state.jobNumber,
      this.state.employeeName1,
      this.state.hours1,
      this.state.jobNumber1,
      this.state.employeeName2,
      this.state.hours2,
      this.state.jobNumber2,
      this.state.employeeName3,
      this.state.hours3,
      this.state.jobNumber3,
      this.state.employeeName4,
      this.state.hours4,
      this.state.jobNumber4,
      this.state.employeeName5,
      this.state.hours5,
      this.state.jobNumber5,
      this.state.employeeName6,
      this.state.hours6,
      this.state.jobNumber6,
      this.state.employeeName7,
      this.state.hours7,
      this.state.jobNumber7,
      this.state.jobDescription
    );
  };

  render() {
    const date = this.state.date; // this is just so to not have to rewrite
    const customer = this.state.customer;
    const project = this.state.project;
    const contractNumber = this.state.contractNumber;
    const foreman = this.state.foreman;
    const weatherNotes = this.state.weatherNotes;
    const weatherStart = this.state.weatherStart;
    const weatherEnd = this.state.weatherEnd;
    const weatherNotes1 = this.state.weatherNotes1;
    const weatherStart1 = this.state.weatherStart1;
    const weatherEnd1 = this.state.weatherEnd1;
    const weatherNotes2 = this.state.weatherNotes2;
    const weatherStart2 = this.state.weatherStart2;
    const weatherEnd2 = this.state.weatherEnd2;
    const weatherNotes3 = this.state.weatherNotes3;
    const weatherStart3 = this.state.weatherStart3;
    const weatherEnd3 = this.state.weatherEnd3;

    return (
      // These are JSX instances of each of the components I made to create the complete form
      <div className="daily-job-report">
        <h1 style={{ paddingLeft: '20px', paddingTop: '20px' }}>
          Daily Job Report
        </h1>
        <form onSubmit={this.onDataSubmit}>
          <div className="job-info-inputs">
            <input
              placeholder="Date (MM/DD/YYYY)"
              name="date"
              onChange={this.onChange}
              value={date}
            />
            <input
              placeholder="Customer"
              name="customer"
              onChange={this.onChange}
              value={customer}
            />
            <input
              placeholder="Project"
              name="project"
              onChange={this.onChange}
              value={project}
            />
            <input
              placeholder="Contract Number"
              name="contractNumber"
              onChange={this.onChange}
              value={contractNumber}
            />
            <input
              placeholder="Foreman/Lead Man"
              name="foreman"
              onChange={this.onChange}
              value={foreman}
            />
          </div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="weather-delay-inputs">
            <div className="weather-delay-one">
              <input
                className="weather-notes"
                placeholder="Weather Delay Notes"
                name="weatherNotes"
                onChange={this.onChange}
                value={weatherNotes}
              />

              <input
                className="weather-start"
                placeholder="Delay Start"
                name="weatherStart"
                onChange={this.onChange}
                value={weatherStart}
              />

              <input
                className="weather-end"
                placeholder="Delay End"
                name="weatherEnd"
                onChange={this.onChange}
                value={weatherEnd}
              />
            </div>
            <div className="weather-delay-two">
              <input
                className="weather-notes"
                placeholder="Weather Delay Notes"
                name="weatherNotes1"
                onChange={this.onChange}
                value={weatherNotes1}
              />
              <input
                className="weather-start"
                placeholder="Delay Start"
                name="weatherStart1"
                onChange={this.onChange}
                value={weatherStart1}
              />
              <input
                className="weather-end"
                placeholder="Delay End"
                name="weatherEnd1"
                onChange={this.onChange}
                value={weatherEnd1}
              />
            </div>
            <div className="weather-delay-three">
              <input
                className="weather-notes"
                placeholder="Weather Delay Notes"
                name="weatherNotes2"
                onChange={this.onChange}
                value={weatherNotes2}
              />
              <input
                className="weather-start"
                placeholder="Delay Start"
                name="weatherStart2"
                onChange={this.onChange}
                value={weatherStart2}
              />

              <input
                className="weather-end"
                placeholder="Delay End"
                name="weatherEnd2"
                onChange={this.onChange}
                value={weatherEnd2}
              />
            </div>
            <div className="weather-delay-four">
              <input
                className="weather-notes"
                placeholder="Weather Delay Notes"
                name="weatherNotes3"
                onChange={this.onChange}
                value={weatherNotes3}
              />
              <input
                className="weather-start"
                placeholder="Delay Start"
                name="weatherStart3"
                onChange={this.onChange}
                value={weatherStart3}
              />
              <input
                className="weather-end"
                placeholder="Delay End"
                name="weatherEnd3"
                onChange={this.onChange}
                value={weatherEnd3}
              />
            </div>
          </div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="project-delay-inputs">
            <div className="project-delay-one">
              <input
                className="project-notes"
                placeholder="Project Delay Notes"
                name="projectNotes"
                onChange={this.onChange}
                value={this.state.projectNotes}
              />
              <input
                className="project-start"
                placeholder="Delay Start"
                name="projectStart"
                onChange={this.onChange}
                value={this.state.projectStart}
              />
              <input
                className="project-end"
                placeholder="Delay End"
                name="projectEnd"
                onChange={this.onChange}
                value={this.state.projectEnd}
              />
            </div>
            <div className="project-delay-two">
              <input
                className="project-notes"
                placeholder="Project Delay Notes"
                name="projectNotes1"
                onChange={this.onChange}
                value={this.state.projectNotes1}
              />
              <input
                className="project-start"
                placeholder="Delay Start"
                name="projectStart1"
                onChange={this.onChange}
                value={this.state.projectStart1}
              />
              <input
                className="project-end"
                placeholder="Delay End"
                name="projectEnd1"
                onChange={this.onChange}
                value={this.state.projectEnd1}
              />
            </div>
            <div className="project-delay-three">
              <input
                className="project-notes"
                placeholder="Project Delay Notes"
                name="projectNotes2"
                onChange={this.onChange}
                value={this.state.projectNotes2}
              />
              <input
                className="project-start"
                placeholder="Delay Start"
                name="projectStart2"
                onChange={this.onChange}
                value={this.state.projectStart2}
              />
              <input
                className="project-end"
                placeholder="Delay End"
                name="projectEnd2"
                onChange={this.onChange}
                value={this.state.projectEnd2}
              />
            </div>
            <div className="project-delay-four">
              <input
                className="project-notes"
                placeholder="Project Delay Notes"
                name="projectNotes3"
                onChange={this.onChange}
                value={this.state.projectNotes3}
              />
              <input
                className="project-start"
                placeholder="Delay Start"
                name="projectStart3"
                onChange={this.onChange}
                value={this.state.projectStart3}
              />
              <input
                className="project-end"
                placeholder="Delay End"
                name="projectEnd3"
                onChange={this.onChange}
                value={this.state.projectEnd3}
              />
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          <div className="bid-work-inputs">
            <div className="bid-work-one">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName"
                onChange={this.onChange}
                value={this.state.employeeName}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours"
                onChange={this.onChange}
                value={this.state.hours}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber"
                onChange={this.onChange}
                value={this.state.jobNumber}
              />
            </div>
            <div className="bid-work-two">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName1"
                onChange={this.onChange}
                value={this.state.employeeName1}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours1"
                onChange={this.onChange}
                value={this.state.hours1}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber1"
                onChange={this.onChange}
                value={this.state.jobNumber1}
              />
            </div>
            <div className="bid-work-three">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName2"
                onChange={this.onChange}
                value={this.state.employeeName2}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours2"
                onChange={this.onChange}
                value={this.state.hours2}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber2"
                onChange={this.onChange}
                value={this.state.jobNumber2}
              />
            </div>
            <div className="bid-work-four">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName3"
                onChange={this.onChange}
                value={this.state.employeeName3}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours3"
                onChange={this.onChange}
                value={this.state.hours3}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber3"
                onChange={this.onChange}
                value={this.state.jobNumber3}
              />
            </div>
            <div className="bid-work-five">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName4"
                onChange={this.onChange}
                value={this.state.employeeName4}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours4"
                onChange={this.onChange}
                value={this.state.hours4}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber4"
                onChange={this.onChange}
                value={this.state.jobNumber4}
              />
            </div>
            <div className="bid-work-six">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName5"
                onChange={this.onChange}
                value={this.state.employeeName5}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours5"
                onChange={this.onChange}
                value={this.state.hours5}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber5"
                onChange={this.onChange}
                value={this.state.jobNumber5}
              />
            </div>
            <div className="bid-work-seven">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName6"
                onChange={this.onChange}
                value={this.state.employeeName6}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours6"
                onChange={this.onChange}
                value={this.state.hours6}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber6"
                onChange={this.onChange}
                value={this.state.jobNumber6}
              />
            </div>
            <div className="bid-work-eight">
              <input
                className="employee-name"
                placeholder="Employee Name"
                name="employeeName7"
                onChange={this.onChange}
                value={this.state.employeeName7}
              />
              <input
                className="hours"
                placeholder="Hours"
                name="hours7"
                onChange={this.onChange}
                value={this.state.hours7}
              />
              <input
                className="job-number"
                placeholder="Job Number"
                name="jobNumber7"
                onChange={this.onChange}
                value={this.state.jobNumber7}
              />
            </div>
          </div>
          <div>
            <textarea
              className="job-description-input"
              placeholder="Job Description"
              name="jobDescription"
              onChange={this.onChange}
              value={this.state.jobDescription}
            />
          </div>
        </form>

        <button
          className="submit-button"
          type="submit"
          onClick={this.dataClick}>
          Submit
        </button>

      </div>
    );
  }
} // end of function component

export default DailyJobReport;
