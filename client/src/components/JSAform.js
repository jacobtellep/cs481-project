import React from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker'
import './JSAform.css';

class JSAform extends React.Component {
    state = {
            date: '',
            ticket_num: '',
            company: '',
            representative: '',
            location: '',
            well_num: '',
            afe_num: '',
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


    onDataSubmit = (
        date,
        ticket_num,
        company,
        representative,
        location,
        well_num,
        afe_num,
        jsa_current_temp,
        weather_sun,
        weather_rain,
        weather_overcast,
        weather_windy,
        weather_hail,
        weather_snow,
        major_steps1,
        major_steps2,
        major_steps3,
        major_steps4,
        major_steps5,
        major_steps6,
        major_steps7,
        potential_hazards1,
        potential_hazards2,
        potential_hazards3,
        potential_hazards4,
        potential_hazards5,
        potential_hazards6,
        potential_hazards7,
        recommendations1,
        recommendations2,
        recommendations3,
        recommendations4,
        recommendations5,
        recommendations6,
        recommendations7,
        emergencyAddress,
        medicalFacility,
        hazard_confinedSpace,
        hazard_fall,
        hazard_sharp,
        hazard_electric,
        hazard_irritants,
        hazard_extremes,
        hazard_pinch_crush,
        hazard_lifting,
        hazard_shortService,
        hazard_explosion,
        hazard_energy,
        hazard_stop,
        hazard_elevated,
        hazard_excavation,
        hazard_chemical,
        hazard_noise,
        hazard_water,
        print_name1,
        employee_initals1,
        print_name2,
        employee_initals2,
        print_name3,
        employee_initals3,
        print_name4,
        employee_initals4,
        print_name5,
        employee_initals5,
        print_name6,
        employee_initals6,
        print_name7,
        employee_initals7,
        print_name8,
        employee_initals8,
        print_name9,
        employee_initals9,
        print_name10,
        employee_initals10
    ) => {
        axios.post('http://localhost:5000/jsaform', {
            date: date,
            ticket_num: ticket_num,
            company: company,
            representative: representative,
            location: location,
            well_num: well_num,
            afe_num: afe_num,
            weather:
            weather_sun + '\n' +
            weather_rain + '\n' +
            weather_overcast + '\n' +
            weather_windy + '\n' +
            weather_hail + '\n' +
            weather_snow + '\n' +
            jsa_current_temp,
            hazardSteps:
            major_steps1 + '\n' +
            major_steps2 + '\n' +
            major_steps3 + '\n' +
            major_steps4 + '\n' +
            major_steps5 + '\n' +
            major_steps6 + '\n' +
            major_steps7,
            potentialHazard:
            potential_hazards1 + '\n' +
            potential_hazards2 + '\n' +
            potential_hazards3 + '\n' +
            potential_hazards4 + '\n' +
            potential_hazards5 + '\n' +
            potential_hazards6 + '\n' +
            potential_hazards7,
            recommHazard:
            recommendations1 + '\n' +
            recommendations2 + '\n' +
            recommendations3 + '\n' +
            recommendations4 + '\n' +
            recommendations5 + '\n' +
            recommendations6 + '\n' +
            recommendations7,
            emergencyAddress: emergencyAddress,
            medicalFacility: medicalFacility,
            hazardType1:
            hazard_confinedSpace + '\n' +
            hazard_fall + '\n' +
            hazard_sharp + '\n' +
            hazard_electric + '\n' +
            hazard_irritants + '\n' +
            hazard_extremes,
            hazardType2:
            hazard_pinch_crush + '\n' +
            hazard_lifting + '\n' +
            hazard_shortService + '\n' +
            hazard_explosion + '\n' +
            hazard_energy + '\n' +
            hazard_stop,
            hazardType3:
            hazard_elevated + '\n' +
            hazard_excavation + '\n' +
            hazard_chemical + '\n' +
            hazard_noise + '\n' +
            hazard_water,
            employeeName:
            print_name1 + '\n' +
            print_name2 + '\n' +
            print_name3 + '\n' +
            print_name4 + '\n' +
            print_name5 + '\n' +
            print_name6 + '\n' +
            print_name7 + '\n' +
            print_name8 + '\n' +
            print_name9 + '\n' +
            print_name10,
            employeeInitals:
            employee_initals1 + '\n' +
            employee_initals2 + '\n' +
            employee_initals3 + '\n' +
            employee_initals4 + '\n' +
            employee_initals5 + '\n' +
            employee_initals6 + '\n' +
            employee_initals7 + '\n' +
            employee_initals8 + '\n' +
            employee_initals9 + '\n' +
            employee_initals10
        }).then(() => {
            console.log('successfully sent the data');
        });
    };

    dataClick = () => {
        this.onDataSubmit(
        this.state.date,
        this.state.ticket_num,
        this.state.company,
        this.state.representative,
        this.state.location,
        this.state.well_num,
        this.state.afe_num,
        this.state.jsa_current_temp,
        this.state.weather_sun,
        this.state.weather_rain,
        this.state.weather_overcast,
        this.state.weather_windy,
        this.state.weather_hail,
        this.state.weather_snow,
        this.state.major_steps1,
        this.state.major_steps2,
        this.state.major_steps3,
        this.state.major_steps4,
        this.state.major_steps5,
        this.state.major_steps6,
        this.state.major_steps7,
        this.state.potential_hazards1,
        this.state.potential_hazards2,
        this.state.potential_hazards3,
        this.state.potential_hazards4,
        this.state.potential_hazards5,
        this.state.potential_hazards6,
        this.state.potential_hazards7,
        this.state.recommendations1,
        this.state.recommendations2,
        this.state.recommendations3,
        this.state.recommendations4,
        this.state.recommendations5,
        this.state.recommendations6,
        this.state.recommendations7,
        this.state.emergencyAddress,
        this.state.medicalFacility,
        this.state.hazard_confinedSpace,
        this.state.hazard_fall,
        this.state.hazard_sharp,
        this.state.hazard_electric,
        this.state.hazard_irritants,
        this.state.hazard_extremes,
        this.state.hazard_pinch_crush,
        this.state.hazard_lifting,
        this.state.hazard_shortService,
        this.state.hazard_explosion,
        this.state.hazard_energy,
        this.state.hazard_stop,
        this.state.hazard_elevated,
        this.state.hazard_excavation,
        this.state.hazard_chemical,
        this.state.hazard_noise,
        this.state.hazard_water,
        this.state.print_name1,
        this.state.employee_initals1,
        this.state.print_name2,
        this.state.employee_initals2,
        this.state.print_name3,
        this.state.employee_initals3,
        this.state.print_name4,
        this.state.employee_initals4,
        this.state.print_name5,
        this.state.employee_initals5,
        this.state.print_name6,
        this.state.employee_initals6,
        this.state.print_name7,
        this.state.employee_initals7,
        this.state.print_name8,
        this.state.employee_initals8,
        this.state.print_name9,
        this.state.employee_initals9,
        this.state.print_name10,
        this.state.employee_initals10
    );
};

    onSubmit = (event) => {
      event.preventDefault();
    };

    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    handleCheck = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    handleDateChange = date => {
        let selectedDateFromcalender = date.toUTCString();
        console.log('date:', date);
        this.setState({
            date: selectedDateFromcalender,
        });
    };

    handleDate = (event) => {
        return evt => {
            const value = evt._d;
            this.setState({date: value});
        }
    }

    render(){
        return(
            <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                <form>
                <h1 style={{paddingLeft: "20px"}}>Job Safety Analysis Form</h1>

                <div style={{display: "flex", flexDirection: "row"}}>
                    <div className="jsa-info">
                            <div className="jsa-info-input">
                                <input
                                    type='number'
                                    min={0}
                                    placeholder="Ticket Number"
                                    name="ticket_num"
                                    onChange={(event) => this.onChange(event)}
                                    value={this.state.value}
                                />
                                <DatePicker
                                    name='date'
                                    selected={this.state.date}
                                    onChange={(date) => this.handleDateChange}
                                    value={this.state.startDate}
                                />
                                <input
                                    placeholder="Company"
                                    name="company"
                                    onChange={(event) => this.onChange(event)}
                                    value={this.state.value}
                                />
                                <input
                                    placeholder="Representative"
                                    name="representative"
                                    onChange={(event) => this.onChange(event)}
                                    value={this.state.value}
                                />
                                <input
                                    placeholder="Locatoin"
                                    name="location"
                                    onChange={(event) => this.onChange(event)}
                                    value={this.state.value}
                                />
                                <input
                                    type='number'
                                    min={0}
                                    placeholder="Well Number"
                                    name="well_num"
                                    onChange={(event) => this.onChange(event)}
                                    value={this.state.value}
                                />
                                <input
                                    type='number'
                                    min={0}
                                    placeholder="AFE Number"
                                    name="afe_num"
                                    onChange={(event) => this.onChange(event)}
                                    value={this.state.value}
                                />
                            </div>
                    </div>
                    <div className="jsa-weather">
                        <h3 style={{position:"relative", top: "20px"}}>Weather</h3>
                            <div className="jsa-weather-input">
                                <div className="checkbox-label">
                                <input type="checkbox"
                                       name="weather_sun"
                                       onChange= {(event) => this.handleCheck(event)}
                                 />
                                <label> Sun</label>
                                </div>

                                <div className="checkbox-label">
                                <input type="checkbox"
                                        name="weather_rain"
                                         onChange= {(event) => this.handleCheck(event)}
                                />
                                <label> Rain</label>
                                </div>

                                <div className="checkbox-label">
                                <input type="checkbox"
                                    name="weather_overcast"
                                    onChange= {(event) => this.handleCheck(event)}
                                />
                                <label> Overcast</label>
                                </div>

                                <div className="checkbox-label">
                                <input type="checkbox"
                                    name="weather_windy"
                                    onChange= {(event) => this.handleCheck(event)}
                                />
                                <label> Windy</label>
                                </div>

                                <div className="checkbox-label">
                                <input type="checkbox"
                                       name="weather_hail"
                                       onChange= {(event) => this.handleCheck(event)}
                                />
                                <label> Hail</label>
                                </div>

                                <div className="checkbox-label">
                                <input type="checkbox"
                                    name="weather_snow"
                                    onChange= {(event) => this.handleCheck(event)}
                                />
                                <label> Snow</label>
                                </div>

                                <input
                                  type="number"
                                  placeholder="Current Temp"
                                  name="jsa_current_temp"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />

                            </div>
                    </div>
                </div>
                    <div className="jsa-hazards">
                            <div className="jsa-hazards-input-text">
                                <textarea
                                  className="jsa-hazard-textbox"
                                  placeholder="911 Address/GPS Location"
                                  name="emergencyAddress"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <textarea
                                  className="jsa-hazard-textbox"
                                  placeholder="Nearest Medical Facility"
                                  name="medicalFacility"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                            </div>
                            <div className="jsa-hazards-input-checkbox">
                                <div className="column1">
                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_confinedSpace"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Confined Space</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_fall"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Fall Protection</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_sharp"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Sharp/Hot/Cold Surfaces</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_electric"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Electric Shock Hazard</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_irritants"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Irritants-Respiratory/Skin</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_extremes"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Environment Extremes</label>
                                    </div>
                                </div>

                                <div className="column2">
                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_pinch_crush"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Pinch/Crush/Strike Hazard</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_lifting"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Lifting Hazard</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_shortService"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Short Services Employees</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_explosion"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Fore or Explosion Potential</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_energy"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Potential Release of Energy</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_stop"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked" style={{whiteSpace: "nowrap"}}> We ALL have the right and obligation to STOP WORK if unsafe conditions or acts are present</label>
                                    </div>
                                </div>

                                <div className="column3">
                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_elevated"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Elevated Work Load</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_excavation"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Excavation</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_chemical"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Hazardous Chemical Exposure</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_noise"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> High Noise Level</label>
                                    </div>

                                    <div className="checkbox-label">
                                    <input type="checkbox" name="hazard_water"  onChange= {(event) => this.handleCheck(event)}/>
                                    <label for="defaultUnchecked"> Water or Drowning Hazard</label>
                                    </div>

                                </div>
                            </div>
                    </div>
                <br />
                    <div className="hazard-steps">
                            <div className="hazardColumn">
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps1"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps2"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps3"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps4"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps5"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps6"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Major Job Steps"
                                  name="major_steps7"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                            </div>
                            <div className="hazardColumn">
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards1"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards2"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards3"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards4"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards5"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards6"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Potential Hazards/Consquences"
                                  name="potential_hazards7"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                            </div>
                            <div className="hazardColumn">
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations1"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations2"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations3"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations4"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations5"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations6"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />
                                <input
                                  className="textbox"
                                  placeholder="Recommendations to Remove Hazard"
                                  name="recommendations7"
                                  onChange={(event) => this.onChange(event)}
                                  value={this.state.value}
                                />

                            </div>



                    </div>
                <br />

                <h3 style={{paddingLeft: "20px"}}>All Contractors and/or Personnel must read and sign this JSA form to work on or around G L Services area
                of Operations. <br/ > DO NOT sign this form if you have not read and FULLY understand the activities that G L Services is engaged in
                <br />and that you are participating in.</h3>

                <div style={{display: "flex", flexDirection: "row", paddingBottom: "20px"}}>
                    <div className="JSABidwork-name">
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name1"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name2"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name3"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name4"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name5"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name6"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name7"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name8"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name9"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="employee-name"
                          placeholder="Print Name"
                          name="print_name10"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />

                    </div>
                    <div className="JSABidwork-initals">
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals1"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                            <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals2"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals3"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals4"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals5"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals6"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals7"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals8"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals9"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                        <input
                            className="initals"
                            placeholder="Enter Initals"
                            name="employee_initals10"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                            />
                    </div>
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
    };

};

export default JSAform;
