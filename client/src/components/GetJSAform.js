import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BackButton from './BackButton';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

class GetJSAform extends React.Component {
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
    employee_initals10: '',
    ticket_numbers: [],
    selectValue: '',
  };

  getjsaform = async () => {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently({
      audience: 'http://localhost:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://localhost:5000/jsaform', {
        params: { id: this.state.selectValue },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({ GetJSAform: response.data }); // the auto-incremented sql id is included in this response.data object

        console.log('successfully retrieved the data');
      });
  };

  getjsaform_id = () => {
    axios.get('http://localhost:5000/jsaform_ticket').then((response) => {
      this.setState({ ticket_numbers: response.data }); // the auto-incremented sql id is included in this response.data object

      console.log('successfully retrieved the data');
    });
  };

  componentDidMount() {
    window.addEventListener('load', this.getjsaform_id());
  }

  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  retrieveClick = () => {
    this.getjsaform(this.state.GetJSAform);
  };

  export = (name) => {

      const HTML_Width = this.divElement.clientWidth;
      const HTML_Height = this.divElement.clientHeight;
      const top_left_margin = 15;
      const PDF_Width = HTML_Width + (top_left_margin);
      const PDF_Height = HTML_Height + (top_left_margin*2);
      const canvas_image_width = 500;
      const canvas_image_height = 500;

      const totalPDFPages = Math.ceil(HTML_Height/1252)-2;
        console.log("html height: " + HTML_Height + " HTML_Width width: " + HTML_Width + "Pages: " + totalPDFPages);

      html2canvas(document.querySelector(`#capture`)).then(canvas => {
          canvas.getContext('2d');
      let dataURL = canvas.toDataURL('image/png');


        const pdf = new jsPDF({
          orientation: "p",
          unit: "cm",
          format: [PDF_Height, PDF_Width]
      });

        pdf.addImage(dataURL, 'PNG', 3, 0.5, canvas_image_width,canvas_image_height);

        for (var i = 1; i <= totalPDFPages; i++) {
              pdf.addPage([PDF_Height, PDF_Width], "p");
              pdf.addImage(dataURL, 'PNG', 3, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
          }

        pdf.save(`${name}.pdf`);

    });

  };


  render() {
    const renderDrop = () => {
      return (
        <select
          style={{ marginLeft: '10px' }}
          value={this.state.selectValue}
          onChange={this.handleChange}>
          {this.state.ticket_numbers.map((str) => (
            <option value={str.ticket_num}>{str.ticket_num}</option>
          ))}
        </select>
      );
    };
    return (
      <div>
        <div>
          <BackButton path="viewform" />
        </div>
        <div style={{ marginLeft: '10px' }}>
          <b>Select Ticket Number</b>
          {renderDrop()}
          <button
            style={{
              color: 'black',
              backgroundColor: 'peachpuff',
              width: '100px',
              margin: '10px',
              border: '2px solid black',
            }}
            onClick={this.getjsaform}
            className="ui button"
            type="button">
            Retrieve
          </button>

          <button
              onClick={()=>this.export("TicketNumber"+this.state.selectValue)}
              className="ui button"
              type="button"
              style={{
                color: 'black',
                backgroundColor: 'peachpuff',
                width: '100px',
                margin: '10px',
                border: '2px solid black',
              }}>Download</button>

          <br />
          <br />
          <br />

          {/* && operator, kind of like using an if statement, will ignore any null values and stills render */}
          <div id={`capture`}  ref={ (divElement) => { this.divElement = divElement }} >
          {this.state.GetJSAform &&
            this.state.GetJSAform.map((value, index) => {
              /* Created variables to help format and split*/
              const weather = value.weather_id.split('\n');

              const hazard_1 = value.hazard_1.split('\n');
              const hazard_2 = value.hazard_2.split('\n');
              const hazard_3 = value.hazard_3.split('\n');

              const majorSteps = value.major_steps;
              const potentialHazard = value.potential_hazard;
              const recommHazard = value.remove_hazard;

              const employeeName = value.user_id;
              const employeeInitals = value.signatures;

              const date = value.proj_date.substring(0, 10);

              return (
                <div className="retrieve-report border" key={index}>
                  <h1>JSA Form</h1>

                  <h3>Job Info</h3>
                  <div
                    className="jsa-info-weather sub-border"
                    style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ marginLeft: '10px' }}>
                      <div>
                        <b>Ticket Number: </b>
                        {value.ticket_num}
                      </div>
                      <div>
                        <b>Date: </b>
                        {date}
                      </div>
                      <div>
                        <b>Company: </b>
                        {value.company}
                      </div>
                      <div>
                        <b>representative: </b>
                        {value.representative}
                      </div>
                      <div>
                        <b>location: </b>
                        {value.location}
                      </div>
                      <div>
                        <b>Well Number: </b>
                        {value.well_num}
                      </div>
                      <div>
                        <b>AFE Number: </b>
                        {value.afe_num}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: '100px',
                      }}>
                      {weather.map((str) => {
                        if (String(str).toLowerCase() == 'true')
                          return (
                            <div style={{ paddingBottom: '1px' }}>
                              {' '}
                              <input type="checkbox" checked={true} />
                            </div>
                          );
                        else if (
                          String(str).toLowerCase() == 'true' ||
                          String(str).toLowerCase() != 'false'
                        )
                          return (
                            <div style={{ paddingBottom: '1px' }}> {str}</div>
                          );
                        return (
                          <div style={{ paddingBottom: '1px' }}>
                            {' '}
                            <input type="checkbox" checked={false} />
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div>Sun</div>
                      <div>Rain</div>
                      <div>Overcast</div>
                      <div>Windy</div>
                      <div>Hail</div>
                      <div style={{ paddingBottom: '1px' }}>Snow</div>
                      <div style={{ paddingTop: '3px' }}>F Temp</div>
                    </div>
                  </div>
                  <br />
                  <div className="jsa-gps-medical sub-border">
                    <div style={{ marginLeft: '10px' }}>
                      <b>Medical Facility: </b>
                      {value.gps_location}
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                      <b>Emergency Address GPS: </b>
                      {value.emergency_address}
                    </div>
                  </div>
                  <br />
                  <div className="sub-border" style={{ paddingLeft: '10px' }}>
                    <h3>Hazards</h3>
                    <div
                      className="hazardCheck"
                      style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {hazard_1.map((str) => {
                          if (String(str).toLowerCase() == 'true')
                            return (
                              <div style={{ paddingBottom: '1px' }}>
                                <input type="checkbox" checked={true} />
                              </div>
                            );
                          return (
                            <div style={{ paddingBottom: '1px' }}>
                              <input type="checkbox" checked={false} />
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>Confined Space</div>
                        <div>Fall Protection</div>
                        <div>Sharp/Hot/Cold Surfaces</div>
                        <div>Electric Shock Hazard</div>
                        <div>Irritants-Respiratory/Skin</div>
                        <div>Environment Extremes</div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '20px',
                        }}>
                        {hazard_2.map((str) => {
                          if (String(str).toLowerCase() == 'true')
                            return (
                              <div style={{ paddingBottom: '1px' }}>
                                <input type="checkbox" checked={true} />
                              </div>
                            );
                          return (
                            <div style={{ paddingBottom: '1px' }}>
                              <input type="checkbox" checked={false} />
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>Pinch/Crush/Strike Hazard</div>
                        <div>Lifting Hazard</div>
                        <div>Short Services Employees</div>
                        <div>Fore or Explosion Potential</div>
                        <div>Potential Release of Energy</div>
                        <div>
                          We ALL have the right and obligation to<br></br> STOP
                          WORK if unsafe conditions or acts are present
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                        }}>
                        {hazard_3.map((str) => {
                          if (String(str).toLowerCase() == 'true')
                            return (
                              <div style={{ paddingBottom: '1px' }}>
                                <input type="checkbox" checked={true} />
                              </div>
                            );
                          return (
                            <div style={{ paddingBottom: '1px' }}>
                              <input type="checkbox" checked={false} />
                            </div>
                          );
                        })}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                        }}>
                        <div>Elevated Work Load</div>
                        <div>Excavation</div>
                        <div>Hazardous Chemical Exposure</div>
                        <div>High Noise Level</div>
                        <div>Water or Drowning Hazard</div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div
                    className="steps-Consquences-remove sub-border"
                    style={{
                      display: 'flex',

                      flexDirection: 'row',
                      paddingLeft: '10px',
                    }}>
                    <div>
                      <h3>Major Steps</h3>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '20px',
                        }}>
                        {majorSteps.split('\n').map((str) => (
                          <p>
                            {str}
                            <hr></hr>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div style={{ paddingLeft: '20px' }}>
                      <h3>Potential Hazards/Consquences</h3>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '20px',
                        }}>
                        {potentialHazard.split('\n').map((str) => (
                          <p>
                            {str}
                            <hr></hr>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div style={{ paddingLeft: '20px' }}>
                      <h3>Recommendations to Remove Hazard</h3>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          paddingLeft: '20px',
                        }}>
                        {recommHazard.split('\n').map((str) => (
                          <p>
                            {str}
                            <hr></hr>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="sub-border">
                    All Contractors and/or Personnel must read and sign this JSA
                    form to work on or around G L Services area of Operations.{' '}
                    <br /> DO NOT sign this form if you have not read and FULLY
                    understand the activities that G L Services is engaged in
                    <br />
                    and that you are participating in.
                  </h3>

                  <div
                    className="employeesAndInitials sub-border"
                    style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: '20px',
                      }}>
                      <h3>Employee Name</h3>
                      {employeeName.split('\n').map((str) => (
                        <p>
                          {str}
                          <hr></hr>
                        </p>
                      ))}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: '20px',
                      }}>
                      <h3>Employee Initals</h3>
                      {employeeInitals.split('\n').map((str) => (
                        <p>
                          {str}
                          <hr></hr>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
          })} </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(GetJSAform);
