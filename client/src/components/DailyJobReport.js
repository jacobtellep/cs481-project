import React from 'react';
import axios from 'axios';
import './DailyJobReport.css';
import DatePicker from 'react-date-picker';
import { withRouter } from 'react-router-dom';
import BackButton from './BackButton';

class DailyJobReport extends React.Component {
  state = {
    hasError: false,
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
    contractArray: [],
    dailyJobReport: [],
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
    this.props.history.push('/datasent');
  };

  validateInput = () => {
    const cust = this.state.customer;
    const proj = this.state.project;
    const contract = this.state.contractNumber;
    const lead = this.state.foreman;

    if (
      cust.trim() == '' ||
      proj.trim() == '' ||
      contract.trim() == '' ||
      lead.trim() == ''
    ) {
      this.setState({ hasError: true });
      console.log('error field not filled or id already chosen');
      console.log(cust + ' - ' + proj + ' - ' + contract + ' - ' + lead);
      console.log(
        'check if id already taken: ' +
          !this.checkDatabaseID(this.state.contractArray, contract)
      );
    } else {
      this.dataClick();
    }
  };

  checkDatabaseID = (arr, val) => {
    return arr.some((arrVal) => val === arrVal);
  };

  getDailyJobReportID = () => {
    axios.get('http://localhost:5000/dailyjobreport_id').then((response) => {
      if (response && response.data)
        this.setState({ contractArray: response.data });
    });
  };

  componentDidMount() {
    window.addEventListener('load', this.getDailyJobReportID());
  }

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

    const infoMessage = () => {
      if (!this.state.hasError) {
        return (
          <div>
            <b>
              Customer, Project, Contract Number, and Foreman/Lead must all be
              filled out before submitting
            </b>
          </div>
        );
      }
    };

    const errorMessage = () => {
      if (this.state.hasError) {
        return (
          <div>
            <font color="red">
              <h3>
                Customer, Project, Contract Number, and Foreman/Lead must all be
                filled out before submitting
              </h3>
              <h3>And/Or Contract Number must be unique</h3>
            </font>
          </div>
        );
      }
    };

    return (
      // These are JSX instances of each of the components I made to create the complete form
      <div>
        <div>
          <BackButton path="createform" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div className="border" style={{ width: '700px' }}>
            <h1 style={{ paddingLeft: '20px', paddingTop: '20px' }}>
              Daily Job Report
            </h1>

            <div style={{ paddingLeft: '20px' }}>
              {infoMessage()}
              <br />
              {errorMessage()}
              <br />
            </div>

            <form onSubmit={this.onDataSubmit}>
              <div className="job-info-inputs">
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={(event) =>
                    this.setState({ date: event.target.value })
                  }
                />
                <input
                  placeholder="Customer"
                  name="customer"
                  onChange={this.onChange}
                  value={customer}
                  required
                />
                <input
                  placeholder="Project"
                  name="project"
                  onChange={this.onChange}
                  value={project}
                  required
                />
                <input
                  type="number"
                  min={0}
                  placeholder="Contract Number"
                  name="contractNumber"
                  onChange={this.onChange}
                  value={contractNumber}
                  required
                />
                <input
                  placeholder="Foreman/Lead Man"
                  name="foreman"
                  onChange={this.onChange}
                  value={foreman}
                  required
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
              style={{
                color: 'black',
                backgroundColor: 'peachpuff',
                width: '100px',
                margin: '10px',
                border: '2px solid black',
              }}
              className="ui button"
              type="submit"
              onClick={this.validateInput}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
} // end of function component

export default DailyJobReport;
