import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './GetDailyJobReport.css';

class GetDailyJobReport extends React.Component {
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
    selectValue: '',
    contract_nums: [],

    dailyJobReport: [],
  };

  //same functions you created
  getDailyJobReport = async () => {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently({
      audience: 'http://localhost:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://localhost:5000/dailyjobreport', {
        params: { id: this.state.selectValue },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({ GetDailyJobReport: response.data }); // the auto-incremented sql id is included in this response.data object

        console.log(response.data);
        console.log('successfully retrieved the data');
      });
  };

  getDailyJobReportID = () => {
    axios.get('http://localhost:5000/dailyjobreport_id').then((response) => {
      if (response && response.data)
        this.setState({ contract_nums: response.data });
    });
  };

  componentDidMount() {
    window.addEventListener('load', this.getDailyJobReportID());
  }

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  retrieveClick = () => {
    this.getDailyJobReport(this.state.GetDailyJobReport);
  };

  render() {
    const renderDrop = () => {
      return (
        <select
          style={{ marginLeft: '10px' }}
          value={this.state.selectValue}
          onChange={this.handleChange}>
          {this.state.contract_nums.map((str) => (
            <option value={str.contract_number}>{str.contract_number}</option>
          ))}
        </select>
      );
    };

    return (
      <div>
        <div style={{ marginLeft: '10px' }}>
          <b>Select Contract Number</b>
          {renderDrop()}

          <button
            onClick={this.getDailyJobReport}
            className="ui button"
            type="button"
            style={{
              color: 'black',
              backgroundColor: 'peachpuff',
              width: '100px',
              margin: '10px',
              border: '2px solid black',
            }}>
            Retrieve
          </button>
        </div>

        <br />
        <br />
        <br />
        {/* && operator, kind of like using an if statement, will ignore any null values and stills render */}
        {this.state.GetDailyJobReport &&
          this.state.GetDailyJobReport.map((value, index) => {
            {
              /* Created variables to help format and split*/
            }
            const weatherNotes = value.weather_delay_notes;
            const weatherStart = value.weather_delay_start;
            const weatherEnd = value.weather_delay_end;

            const projectNotes = value.project_delay_notes;
            const projectStart = value.project_delay_start;
            const projectEnd = value.project_delay_end;

            const employeeName = value.employee_name;
            const employeeHours = value.hours;
            const jobNum = value.job_number;

            const date = value.date.substring(0, 10);

            return (
              <div
                style={{ backgroundColor: 'ghostwhite' }}
                className="retrieve-report border"
                key={index}>
                <h1>Daily Job Report</h1>
                <div
                  style={{
                    paddingLeft: '10px',
                    backgroundColor: 'white',
                    paddingRight: '10px',
                  }}
                  className="sub-border">
                  <div>
                    <b>Date:</b> <br></br> {date}
                  </div>
                  <div>
                    <b>Customer:</b>
                    <br></br> {value.customer}
                  </div>
                  <div>
                    <b>Project:</b>
                    <br></br> {value.project}
                  </div>
                  <div>
                    <b>Contract Number:</b>
                    <br></br> {value.contract_number}
                  </div>
                  <div>
                    <b>Foreman:</b>
                    <br></br> {value.foreman}
                  </div>
                  <br />
                </div>

                <h3>Weather Delay</h3>
                <div
                  style={{ backgroundColor: 'white' }}
                  className="return sub-border">
                  {/* Used for all database responses that have to split
                    name.split('\n').map(str => <p>{str}</p>)
                    Puts each entry on a new line
                    Styling to split attr up so they're not on top of each other*/}
                  <div style={{ width: '300px' }}>
                    {weatherNotes.split('\n').map((str) => (
                      <p>
                        <b>Notes: </b>
                        {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                  <div style={{ width: '120px' }}>
                    {weatherStart.split('\n').map((str) => (
                      <p>
                        <b>Start:</b> {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                  <div style={{ width: '120px' }}>
                    {weatherEnd.split('\n').map((str) => (
                      <p>
                        <b>End:</b> {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                </div>

                <br />
                <h3>Project Delay</h3>
                <div
                  style={{ backgroundColor: 'white' }}
                  className="return sub-border">
                  <div style={{ width: '300px' }}>
                    {projectNotes.split('\n').map((str) => (
                      <p>
                        <b>Notes: </b>
                        {str} <hr></hr>
                      </p>
                    ))}
                  </div>
                  <div style={{ width: '120px' }}>
                    {projectStart.split('\n').map((str) => (
                      <p>
                        <b>Start:</b> {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                  <div style={{ width: '120px' }}>
                    {projectEnd.split('\n').map((str) => (
                      <p>
                        <b>End:</b> {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                </div>

                <br />
                <h3>Employees and Hours</h3>
                <div
                  style={{ backgroundColor: 'white' }}
                  className="return sub-border">
                  <div style={{ width: '300px' }}>
                    {employeeName.split('\n').map((str) => (
                      <p>
                        <b>Name: </b>
                        {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                  <div style={{ width: '120px' }}>
                    {employeeHours.split('\n').map((str) => (
                      <p>
                        <b>Hours:</b> {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                  <div style={{ width: '120px' }}>
                    {jobNum.split('\n').map((str) => (
                      <p>
                        <b>Job Number:</b> {str}
                        <hr></hr>
                      </p>
                    ))}
                  </div>
                </div>

                <br />
                <h3>Job Description</h3>
                <div
                  style={{
                    paddingBottom: '20px',
                    paddingLeft: '10px',
                    paddingTop: '10px',
                    backgroundColor: 'white',
                  }}
                  className="sub-border">
                  {value.job_description}
                </div>
              </div>
            );
          })}

        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default withAuth0(GetDailyJobReport);
