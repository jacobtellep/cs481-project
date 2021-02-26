import React from 'react';
import axios from 'axios';

class GetJSAform extends React.Component{
    state = {
            ticket_num: '',
            date: '',
            company: '',
            representative: '',
            location: '',
            well_num: '',
            afe_num: '',
            weahter: '',
            jsa_current_temp: '',
            weather_sun: 'false',
            weather_rain: 'false',
            weather_overcast: 'false',
            weather_windy: 'false',
            weather_hail: 'false',
            weather_snow: 'false',
            major_steps1: '',
            major_steps2: '',
            major_steps3: '',
            major_steps4: '',
            major_steps5: '',
            major_steps6: '',
            major_steps7: '',
            potential_hazards1: '',
            potential_hazards2: '',
            potential_hazards3: '',
            potential_hazards4: '',
            potential_hazards5: '',
            potential_hazards6: '',
            potential_hazards7: '',
            recommendations1: '',
            recommendations2: '',
            recommendations3: '',
            recommendations4: '',
            recommendations5: '',
            recommendations6: '',
            recommendations7: '',
            emergencyAddress: '',
            medicalFacility: '',
            hazard_1: '',
            hazard_2: '',
            hazard_3: '',
            hazard_confinedSpace: 'false',
            hazard_fall: 'false',
            hazard_sharp: 'false',
            hazard_electric: 'false',
            hazard_irritants: 'false',
            hazard_extremes: 'false',
            hazard_pinch_crush: 'false',
            hazard_lifting: 'false',
            hazard_shortService: 'false',
            hazard_explosion: 'false',
            hazard_energy: 'false',
            hazard_stop: 'false',
            hazard_elevated: 'false',
            hazard_excavation: 'false',
            hazard_chemical: 'false',
            hazard_noise: 'false',
            hazard_water: 'false',
            print_name1: '',
            employee_initals1: '',
            print_name2: '',
            employee_initals2: '',
            print_name3: '',
            employee_initals3: '',
            print_name4: '',
            employee_initals4: '',
            print_name5: '',
            employee_initals5: '',
            print_name6: '',
            employee_initals6: '',
            print_name7: '',
            employee_initals7: '',
            print_name8: '',
            employee_initals8: '',
            print_name9: '',
            employee_initals9: '',
            print_name10: '',
            employee_initals10: ''
        };

        getjsaform = () => {
          axios.get('http://localhost:5000/jsaform').then((response) => {
            this.setState({ GetJSAform: response.data }); // the auto-incremented sql id is included in this response.data object

            console.log(response.data);
            console.log('successfully retrieved the data');
          });
        };

        retrieveClick = () => {
          this.getjsaform(this.state.GetJSAform);
        };



        render() {
            return(
                <div>

                    <button
                      onClick={this.getjsaform}
                      className="retrieve-button"
                      type="button">
                      Retrieve
                    </button>

                    <br /><br /><br />

                        {/* && operator, kind of like using an if statement, will ignore any null values and stills render */}
                        {this.state.GetJSAform && this.state.GetJSAform.map((value, index) => {
                            /* Created variables to help format and split*/
                            const weather = value.weather_id;

                            const hazard_1 = value.hazard_1;
                            const hazard_2 = value.hazard_2;
                            const hazard_3 = value.hazard_3;

                            const majorSteps = value.major_steps;
                            const potentialHazard = value.potential_hazard;
                            const recommHazard = value.remove_hazard;

                            const employeeName = value.user_id;
                            const employeeInitals = value.signatures;

                          return (
                            <div className="retrieve-report" key={index}>
                              <h1>JSA Form</h1>

                              <h3>Job Info</h3>
                              <div className='jsa-info-weather' style={{display: "flex", flexDirection: "row"}}>
                                  <div>
                                      <div><b>Ticket Number: </b>{value.ticket_num}</div>
                                      <div><b>Date: </b>{value.date}</div>
                                      <div><b>Company: </b>{value.company}</div>
                                      <div><b>representative: </b>{value.representative}</div>
                                      <div><b>location: </b>{value.location}</div>
                                      <div><b>Well Number: </b>{value.well_num}</div>
                                      <div><b>AFE Number: </b>{value.afe_num}</div>
                                  </div>
                                <div style={{display: "flex", flexDirection: "column", paddingLeft: "100px"}}>
                                  {weather.split('\n').map(str=> <div style={{paddingBottom: "1px"}}><input type="checkbox" defaultChecked={str} /></div>)}
                                </div>
                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <div>Sun</div>
                                    <div>Rain</div>
                                    <div>Overcast</div>
                                    <div>Windy</div>
                                    <div>Hail</div>
                                    <div>Snow</div>
                                    <div>Temp</div>
                                </div>
                              </div>
                              <br />
                              <div className="jsa-gps-medical">
                                 <div><b>Medical Facility: </b>{value.gps_location}</div>
                                 <div><b>Emergency Address GPS: </b>{value.emergency_address}</div>
                              </div>
                              <br />
                              <h3>Hazards</h3>
                              <div className="hazardCheck" style={{display: "flex", flexDirection: "row"}}>
                              <div style={{display: "flex", flexDirection: "column"}}>
                                {hazard_1.split('\n').map(str=> <div style={{paddingBottom: "1px"}}><input type="checkbox" defaultChecked={str} /></div>)}
                              </div>
                              <div style={{display: "flex", flexDirection: "column"}}>
                                  <div>Confined Space</div>
                                  <div>Fall Protection</div>
                                  <div>Sharp/Hot/Cold Surfaces</div>
                                  <div>Electric Shock Hazard</div>
                                  <div>Irritants-Respiratory/Skin</div>
                                  <div>Environment Extremes</div>
                              </div>

                              <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px"}}>
                                {hazard_2.split('\n').map(str=> <div style={{paddingBottom: "1px"}}><input type="checkbox" defaultChecked={str} /></div>)}
                              </div>
                              <div style={{display: "flex", flexDirection: "column"}}>
                                  <div>Pinch/Crush/Strike Hazard</div>
                                  <div>Lifting Hazard</div>
                                  <div>Short Services Employees</div>
                                  <div>Fore or Explosion Potential</div>
                                  <div>Potential Release of Energy</div>
                                  <div>We ALL have the right and obligation to STOP WORK if unsafe conditions or acts are present</div>
                              </div>

                              <div style={{display: "flex", flexDirection: "column", position: "relative", left: "-450px"}}>
                                {hazard_3.split('\n').map(str=> <div style={{paddingBottom: "1px"}}><input type="checkbox" defaultChecked={str} /></div>)}
                              </div>
                              <div style={{display: "flex", flexDirection: "column", position: "relative", left: "-450px"}}>
                                  <div>Elevated Work Load</div>
                                  <div>Excavation</div>
                                  <div>Hazardous Chemical Exposure</div>
                                  <div>High Noise Level</div>
                                  <div>Water or Drowning Hazard</div>
                              </div>
                            </div>
                            <br />

                            <div className="steps-Consquences-remove" style={{display: "flex", flexDirection:"row"}}>
                                <div>
                                    <h3>Major Steps</h3>
                                <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px"}}>
                                  {majorSteps.split('\n').map(str=> <p>{str}</p>)}
                                  </div>
                                </div>

                                <div style={{paddingLeft: "20px"}}>
                                    <h3>Potential Hazards/Consquences</h3>
                                <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px"}}>
                                  {potentialHazard.split('\n').map(str=> <p>{str}</p>)}
                                </div>
                                </div>

                                <div style={{paddingLeft: "20px"}}>
                                    <h3>Recommendations to Remove Hazard</h3>
                                <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px"}}>
                                  {recommHazard.split('\n').map(str=> <p>{str}</p>)}
                                </div>
                                </div>
                            </div>

                                <h3>All Contractors and/or Personnel must read and sign this JSA form to work on or around G L Services area
                                of Operations. <br/ > DO NOT sign this form if you have not read and FULLY understand the activities that G L Services is engaged in
                                <br />and that you are participating in.</h3>

                                <div className="employeesAndInitials" style={{display: "flex", flexDirection: "row"}}>
                                    <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px"}}>
                                        <h3>Employee Name</h3>
                                      {employeeName.split('\n').map(str=> <p>{str}</p>)}
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", paddingLeft: "20px"}}>
                                        <h3>Employee Initals</h3>
                                      {employeeInitals.split('\n').map(str=> <p>{str}</p>)}
                                    </div>
                                </div>
                            </div>

                          );
                        })}

                </div>
            );
        };
};

export default GetJSAform;
