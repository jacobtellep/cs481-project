import React from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import './InspectionForm.css';

class InspectionForm extends React.Component {
    state = {
        company: '',
        date: '',
        location: '',
        job_num: '',
        equipment: '',
        hour_meter: '',
        mileage: '',
        na_lights: 'false',
        ok_lights: 'false',
        rr_lights: 'false',
        na_steps: 'false',
        ok_steps: 'false',
        rr_steps: 'false',
        na_tires: 'false',
        ok_tires: 'false',
        rr_tires: 'false',
        na_exhaust: 'false',
        ok_exhaust: 'false',
        rr_exhaust: 'false',
        na_fenders: 'false',
        ok_fenders: 'false',
        rr_fenders: 'false',
        na_bucket: 'false',
        ok_bucket: 'false',
        rr_bucket: 'false',
        na_cuttingEdge: 'false',
        ok_cuttingEdge: 'false',
        rr_cuttingEdge: 'false',
        na_lift: 'false',
        ok_lift: 'false',
        rr_lift: 'false',
        na_hoses: 'false',
        ok_hoses: 'false',
        rr_hoses: 'false',
        na_fittingsG: 'false',
        ok_fittingsG: 'false',
        rr_fittingsG: 'false',
        na_hitch: 'false',
        ok_hitch: 'false',
        rr_hitch: 'false',
        na_wipers: 'false',
        ok_wipers: 'false',
        rr_wipers: 'false',
        na_bCable: 'false',
        ok_bCable: 'false',
        rr_bCable: 'false',
        na_fanBelt: 'false',
        ok_fanBelt: 'false',
        rr_fanBelt: 'false',
        na_engineHose: 'false',
        ok_engineHose: 'false',
        rr_engineHose: 'false',
        na_airFilter: 'false',
        ok_airFilter: 'false',
        rr_airFilter: 'false',
        na_guards: 'false',
        ok_guards: 'false',
        rr_guards: 'false',
        na_brakesS: 'false',
        ok_brakesS: 'false',
        rr_brakesS: 'false',
        na_brakesP: 'false',
        ok_brakesP: 'false',
        rr_brakesP: 'false',
        na_backup: 'false',
        ok_backup: 'false',
        rr_backup: 'false',
        na_fire: 'false',
        ok_fire: 'false',
        rr_fire: 'false',
        na_gauges: 'false',
        ok_gauges: 'false',
        rr_gauges: 'false',
        na_horn: 'false',
        ok_horn: 'false',
        rr_horn: 'false',
        na_hydroControls: 'false',
        ok_hydroControls: 'false',
        rr_hydroControls: 'false',
        na_glass: 'false',
        ok_glass: 'false',
        rr_glass: 'false',
        na_mirror: 'false',
        ok_mirror: 'false',
        rr_mirror: 'false',
        na_rollOver: 'false',
        ok_rollOver: 'false',
        rr_rollOver: 'false',
        na_seat: 'false',
        ok_seat: 'false',
        rr_seat: 'false',
        na_steering: 'false',
        ok_steering: 'false',
        rr_steering: 'false',
        na_leaks: 'false',
        ok_leaks: 'false',
        rr_leaks: 'false',
        na_oil: 'false',
        ok_oil: 'false',
        rr_oil: 'false',
        na_coolant: 'false',
        ok_coolant: 'false',
        rr_coolant: 'false',
        na_hydroOil: 'false',
        ok_hydroOil: 'false',
        rr_hydroOil: 'false',
        na_transFluid: 'false',
        ok_transFluid: 'false',
        rr_transFluid: 'false',
        na_fuel: 'false',
        ok_fuel: 'false',
        rr_fuel: 'false',
        defects: '',
        repairsNeeded: 'false',
        repairsNotNeeded: 'false',
        operatorInitals: '',
        mechanicInitals: ''
    }

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

    render() {
        return(

            <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
                <form>
                <h1 style={{paddingLeft: "20px"}}>Equipment Inspection Form</h1>
                <div className="inspect-info" >
                    <input
                        placeholder="Company"
                        name="company"
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
                        placeholder="Locatoin"
                        name="location"
                        onChange={(event) => this.onChange(event)}
                        value={this.state.value}
                        />
                    <input
                        type='number'
                        min={0}
                        placeholder="Job Number"
                        name="job_num"
                        onChange={(event) => this.onChange(event)}
                        value={this.state.value}
                    />
                    <input
                        placeholder="Equipment"
                        name="equipment"
                        onChange={(event) => this.onChange(event)}
                        value={this.state.value}
                    />
                    <input
                        type='number'
                        precision={2}
                        step={0.01}
                        min={0}
                        placeholder="Hour Meter"
                        name="hour_meter"
                        onChange={(event) => this.onChange(event)}
                        value={this.state.value}
                    />
                    <input
                        type='number'
                        min={0}
                        placeholder="Mileage"
                        precision={2}
                        step={0.01}
                        name="mileage"
                        onChange={(event) => this.onChange(event)}
                        value={this.state.value}
                    />
                </div>

                <br />

                <div className="info">
                <b>N/A = NOT APPLICABLE</b>
                <b className="info">OK = NO REPAIRS NEEDED</b>
                <b className="info">RR = REQUIRES REPAIR</b>
                </div>

                <br />

            <div className="columns">

                <div className="column">
                    <b>Outside</b>
                    <b>NA OK RR</b>
                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_lights"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_lights"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_lights"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Lights</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_steps"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_steps"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_steps"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Steps/Hand Rails</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_tires"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_tires"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_tires"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Tires/Tracks</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_exhaust"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_exhaust"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_exhaust"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Exhaust</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_fenders"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_fenders"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_fenders"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Fenders</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_bucket"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_bucket"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_bucket"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Bucket</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_cuttingEdge"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_cuttingEdge"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_cuttingEdge"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Cutting Edge/Teeth</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_lift"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_lift"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_lift"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Lifting Mechanism</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_hoses"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_hoses"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_hoses"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Hoses</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_fittingsG"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_fittingsG"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_fittingsG"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Fittings Greased</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_hitch"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_hitch"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_hitch"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Hitch/Coupler</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_wipers"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="ok_wipers"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_wipers"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Wipers</label>
                    </div>


                </div>

                <div className="column2">
                    <b>Engine Compartment</b>
                    <b>NA OK RR</b>
                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_bCable"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_bCable"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_bCable"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Battery Cable</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_fanBelt"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_fanBelt"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_fanBelt"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Fan Belt</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_engineHose"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_engineHose"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_engineHose"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Hoses</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_airFilter"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_airFilter"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_airFilter"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Air Filter</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_guards"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_guards"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_guards"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Guards</label>
                    </div>

                    <b>Engine Compartment</b>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_brakesS"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_brakesS"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_brakesS"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Brakes, Service</label>
                        </div>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_brakesp"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_brakesP"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_brakesP"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Brakes, Parking</label>
                        </div>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_backup"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_backup"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_backup"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Backup Alarm</label>
                        </div>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_fire"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_fire"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_fire"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Fire Extinguisher</label>
                        </div>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_gauges"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_gauges"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_gauges"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Gauges</label>
                        </div>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_horn"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_horn"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_horn"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Horn</label>
                        </div>

                        <div className="checkRow">
                            <input type="checkbox"
                                    name="na_hydroControls"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                   name="ok_hydroControls"
                                   onChange= {(event) => this.handleCheck(event)}
                            />
                            <input type="checkbox"
                                    name="rr_hydroControls"
                                     onChange= {(event) => this.handleCheck(event)}
                            />
                        <label> Hydraulic Controls</label>
                        </div>
                </div>

                <div className="column2">
                    <b>Inside Cab (cont.)</b>
                    <b>NA OK RR</b>
                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_glass"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_glass"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_glass"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Glass (all sides)</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_glass"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_glass"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_glass"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Glass (all sides)</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_mirror"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_mirror"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_mirror"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Mirror</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_rollOver"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_rollOver"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_rollOver"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Roll Over Protection</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_seat"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_seat"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_seat"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Seat Belt/Seat</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_steering"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_steering"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_steering"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Steering</label>
                    </div>

                    <b>Fluids</b>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_leaks"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_leaks"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_leaks"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Visible Leaks</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_oil"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_oil"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_oil"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Oil Level/Pressure</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_coolant"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_coolant"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_coolant"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Coolant Level (check only when COLD)</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_hydroOil"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_hydroOil"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_hydroOil"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Hydraulic Oil Level</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_transFluid"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_transFluid"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_transFluid"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Transmission Fluid Level</label>
                    </div>

                    <div className="checkRow">
                        <input type="checkbox"
                                name="na_fuel"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                               name="ok_fuel"
                               onChange= {(event) => this.handleCheck(event)}
                        />
                        <input type="checkbox"
                                name="rr_fuel"
                                 onChange= {(event) => this.handleCheck(event)}
                        />
                    <label> Fuel Level</label>
                    </div>

                </div>
            </div>

            <br />

            <div style={{paddingLeft: "20px"}}>
            <textarea
              className="explain-defects"
              placeholder="Explanation of Defects"
              name="defects"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            </div>

            <br />

            <div className="check-repair">
                    <input type="checkbox"
                            name="repairsNeeded"
                            onChange= {(event) => this.handleCheck(event)}
                         />
                <label> Repairs or adjustments needed</label>
                <div style={{paddingLeft: "20px"}}>
                    <input type="checkbox"
                            name="repairsNotNeeded"
                            onChange= {(event) => this.handleCheck(event)}
                         />
                <label> Repairs or Adjustments NOT needed for safe equipment operation</label>
                </div>
            </div>

        <br />

            <div style={{paddingLeft: "20px"}}><b>Operator's Initals: </b>
                <input
                    className="initals"
                    placeholder="Enter Initals"
                    name="operatorInitals"
                    onChange={(event) => this.onChange(event)}
                    value={this.state.value}
                    />
            </div>
            <div style={{paddingLeft: "20px"}}><b>Mechanic's Initals: </b>
                <input
                    className="initals"
                    placeholder="Enter Initals"
                    name="mechanicInitals"
                    onChange={(event) => this.onChange(event)}
                    value={this.state.value}
                    /></div>

            </form>
        </div>
        );
    };
};

export default InspectionForm;
