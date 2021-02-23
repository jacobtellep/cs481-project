import React from 'react';
import axios from 'axios';
import './GetDailyJobReport.css'

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

      dailyJobReport: [],
    };

    //same functions you created
    getDailyJobReport = () => {
      axios.get('http://localhost:5000/dailyjobreport').then((response) => {
        this.setState({ GetDailyJobReport: response.data }); // the auto-incremented sql id is included in this response.data object

        console.log(response.data);
        console.log('successfully retrieved the data');
      });
    };

    retrieveClick = () => {
      this.getDailyJobReport(this.state.GetDailyJobReport);
    };



    render(){

        return(
            <div>
            <button
              onClick={this.getDailyJobReport}
              className="retrieve-button"
              type="button">
              Retrieve
            </button>

            <br /><br /><br />

            {/* && operator, kind of like using an if statement, will ignore any null values and stills render */}
            {this.state.GetDailyJobReport && this.state.GetDailyJobReport.map((value, index) => {
                {/* Created variables to help format and split*/}
                const weatherNotes = value.weather_delay_notes;
                const weatherStart = value.weather_delay_start;
                const weatherEnd = value.weather_delay_end;

                const projectNotes = value.project_delay_notes;
                const projectStart = value.project_delay_start;
                const projectEnd = value.project_delay_end;

                const employeeName = value.employee_name;
                const employeeHours = value.hours;
                const jobNum = value.job_number;

              return (
                <div className="retrieve-report" key={index}>
                  <h1>Daily Job Report</h1>
                  <div>{value.date}</div>
                  <div>{value.customer}</div>
                  <div>{value.project}</div>
                  <div>{value.contract_number}</div>
                  <div>{value.foreman}</div>
                  <br />

                  <h3>Weather Delay</h3>
                  <div className="return">

                {/* Used for all database responses that have to split
                    name.split('\n').map(str => <p>{str}</p>)
                    Puts each entry on a new line
                    Styling to split attr up so they're not on top of each other*/}
                  <div>{weatherNotes.split('\n').map(str => <p>{str}</p>)}</div>
                  <div style={{paddingLeft: "100px"}}>{weatherStart.split('\n').map(str => <p>Start {str}</p>)}</div>
                  <div style={{paddingLeft: "15px"}}>{weatherEnd.split('\n').map(str => <p>End {str}</p>)}</div>
                  </div>

                  <br />
                  <h3>Project Delay</h3>
                  <div className="return">
                  <div>{projectNotes.split('\n').map(str => <p>{str}</p>)}</div>
                  <div style={{paddingLeft: "100px"}}>{projectStart.split('\n').map(str => <p> Start {str}</p>)}</div>
                  <div style={{paddingLeft: "15px"}}>{projectEnd.split('\n').map(str => <p>End {str}</p>)}</div>
                  </div>

                  <br />
                  <h3>Employees and Hours</h3>
                  <div className="return">
                  <div>{employeeName.split('\n').map(str => <p>{str}</p>)}</div>
                  <div style={{paddingLeft: "100px"}}>{employeeHours.split('\n').map(str => <p>{str} Hours </p>)}</div>
                  <div style={{paddingLeft: "15px"}}>{jobNum.split('\n').map(str => <p>Job Number: {str}</p>)}</div>
                  </div>

                  <br />
                  <h3>Job Description</h3>
                  <div style={{paddingBottom: "20px"}}>{value.job_description}</div>
                </div>
              );
            })}
            </div>
        );
    };
};

export default GetDailyJobReport;
