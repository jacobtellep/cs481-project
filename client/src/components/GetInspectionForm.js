import React from 'react';
import axios from 'axios';
import './GetInspectionForm';

class GetInspectionForm extends React.Component {
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

    columnA : {
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
        rr_wipers: 'false'
    }

    getInspectionForm = () => {
      axios.get('http://localhost:5000/inspection').then((response) => {
        this.setState({ GetInspectionForm: response.data }); // the auto-incremented sql id is included in this response.data object

        console.log(response.data);
        console.log('successfully retrieved the data');
      });
    };

    retrieveClick = () => {
      this.getInspectionForm(this.state.GetInspectionForm);
    };


    render() {
        return(
            <div>
                <button
                  onClick={this.getInspectionForm}
                  className="retrieve-button"
                  type="button">
                  Retrieve
                </button>

                <br /><br /><br />

                {this.state.GetInspectionForm && this.state.GetInspectionForm.map((value, index) => {
                    const column1 = value.column1;
                    {/*column1.split('\n').map((str,i)=> this.setState({columnA[i]: {str}}))

                        Going to have to render like we did in the inspectionform, need to get
                        an array of the values from the database mapped to the names of each
                        checkbox like in the inspectionform


                    */}
                    const column2 = value.column2;
                    const column3 = value.column3;

                    return(
                        <div className='retrieve-report' key={index}>
                            <h1>Inspection Form</h1>

                            <h3>Job Info</h3>
                            <div className="inspection-info">
                                <div><b>Company: </b> {value.company}</div>
                                <div><b>Date: </b> {value.date}</div>
                                <div><b>Location: </b> {value.location}</div>
                                <div><b>Job Number: </b> {value.job_num}</div>
                                <div><b>Equipment: </b> {value.equip_type}</div>
                                <div><b>Hour Meter: </b> {value.hour_meter}</div>
                                <div><b>Mileage: </b> {value.mileage}</div>
                            </div>

                            <br /><br />

                            <div className="info">
                            <b>N/A = NOT APPLICABLE</b>
                            <b className="info">OK = NO REPAIRS NEEDED</b>
                            <b className="info">RR = REQUIRES REPAIR</b>
                            </div>

                            <br /><br />

                            <div className="columns">
                                <div classname="column1">
                                    <b>Outside</b>
                                    <p>NA OK RR</p>
                                    <div className="checkRow">
                                         {column1.split('\n').map((str)=> <div> <input type="checkbox" checked={!!this.str} />{str} </div> )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    );

                })}

            </div>
        );
    };

};

export default GetInspectionForm;
