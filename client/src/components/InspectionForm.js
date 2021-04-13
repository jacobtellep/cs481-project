import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import './InspectionForm.css';
import BackButton from './BackButton';

class InspectionForm extends React.Component {
  state = {
    hasError: false,
    jobArray: [],
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
    mechanicInitals: '',
  };

  onDataSubmit = (
    company,
    date,
    location,
    job_num,
    equipment,
    hour_meter,
    mileage,
    na_lights,
    ok_lights,
    rr_lights,
    na_steps,
    ok_steps,
    rr_steps,
    na_tires,
    ok_tires,
    rr_tires,
    na_exhaust,
    ok_exhaust,
    rr_exhaust,
    na_fenders,
    ok_fenders,
    rr_fenders,
    na_bucket,
    ok_bucket,
    rr_bucket,
    na_cuttingEdge,
    ok_cuttingEdge,
    rr_cuttingEdge,
    na_lift,
    ok_lift,
    rr_lift,
    na_hoses,
    ok_hoses,
    rr_hoses,
    na_fittingsG,
    ok_fittingsG,
    rr_fittingsG,
    na_hitch,
    ok_hitch,
    rr_hitch,
    na_wipers,
    ok_wipers,
    rr_wipers,
    na_bCable,
    ok_bCable,
    rr_bCable,
    na_fanBelt,
    ok_fanBelt,
    rr_fanBelt,
    na_engineHose,
    ok_engineHose,
    rr_engineHose,
    na_airFilter,
    ok_airFilter,
    rr_airFilter,
    na_guards,
    ok_guards,
    rr_guards,
    na_brakesS,
    ok_brakesS,
    rr_brakesS,
    na_brakesP,
    ok_brakesP,
    rr_brakesP,
    na_backup,
    ok_backup,
    rr_backup,
    na_fire,
    ok_fire,
    rr_fire,
    na_gauges,
    ok_gauges,
    rr_gauges,
    na_horn,
    ok_horn,
    rr_horn,
    na_hydroControls,
    ok_hydroControls,
    rr_hydroControls,
    na_glass,
    ok_glass,
    rr_glass,
    na_mirror,
    ok_mirror,
    rr_mirror,
    na_rollOver,
    ok_rollOver,
    rr_rollOver,
    na_seat,
    ok_seat,
    rr_seat,
    na_steering,
    ok_steering,
    rr_steering,
    na_leaks,
    ok_leaks,
    rr_leaks,
    na_oil,
    ok_oil,
    rr_oil,
    na_coolant,
    ok_coolant,
    rr_coolant,
    na_hydroOil,
    ok_hydroOil,
    rr_hydroOil,
    na_transFluid,
    ok_transFluid,
    rr_transFluid,
    na_fuel,
    ok_fuel,
    rr_fuel,
    defects,
    repairsNeeded,
    repairsNotNeeded,
    operatorInitals,
    mechanicInitals
  ) => {
    axios
      .post('http://34.229.169.195:5000/inspectionform', {
        company: company,
        date: date,
        location: location,
        job_num: job_num,
        equipment: equipment,
        hour_meter: hour_meter,
        mileage: mileage,
        column1:
          na_lights +
          '\n' +
          ok_lights +
          '\n' +
          rr_lights +
          '\n' +
          na_steps +
          '\n' +
          ok_steps +
          '\n' +
          rr_steps +
          '\n' +
          na_tires +
          '\n' +
          ok_tires +
          '\n' +
          rr_tires +
          '\n' +
          na_exhaust +
          '\n' +
          ok_exhaust +
          '\n' +
          rr_exhaust +
          '\n' +
          na_fenders +
          '\n' +
          ok_fenders +
          '\n' +
          rr_fenders +
          '\n' +
          na_bucket +
          '\n' +
          ok_bucket +
          '\n' +
          rr_bucket +
          '\n' +
          na_cuttingEdge +
          '\n' +
          ok_cuttingEdge +
          '\n' +
          rr_cuttingEdge +
          '\n' +
          na_lift +
          '\n' +
          ok_lift +
          '\n' +
          rr_lift +
          '\n' +
          na_hoses +
          '\n' +
          ok_hoses +
          '\n' +
          rr_hoses +
          '\n' +
          na_fittingsG +
          '\n' +
          ok_fittingsG +
          '\n' +
          rr_fittingsG +
          '\n' +
          na_hitch +
          '\n' +
          ok_hitch +
          '\n' +
          rr_hitch +
          '\n' +
          na_wipers +
          '\n' +
          ok_wipers +
          '\n' +
          rr_wipers,
        column2:
          na_bCable +
          '\n' +
          ok_bCable +
          '\n' +
          rr_bCable +
          '\n' +
          na_fanBelt +
          '\n' +
          ok_fanBelt +
          '\n' +
          rr_fanBelt +
          '\n' +
          na_engineHose +
          '\n' +
          ok_engineHose +
          '\n' +
          rr_engineHose +
          '\n' +
          na_airFilter +
          '\n' +
          ok_airFilter +
          '\n' +
          rr_airFilter +
          '\n' +
          na_guards +
          '\n' +
          ok_guards +
          '\n' +
          rr_guards +
          '\n' +
          na_brakesS +
          '\n' +
          ok_brakesS +
          '\n' +
          rr_brakesS +
          '\n' +
          na_brakesP +
          '\n' +
          ok_brakesP +
          '\n' +
          rr_brakesP +
          '\n' +
          na_backup +
          '\n' +
          ok_backup +
          '\n' +
          rr_backup +
          '\n' +
          na_fire +
          '\n' +
          ok_fire +
          '\n' +
          rr_fire +
          '\n' +
          na_gauges +
          '\n' +
          ok_gauges +
          '\n' +
          rr_gauges +
          '\n' +
          na_horn +
          '\n' +
          ok_horn +
          '\n' +
          rr_horn +
          '\n' +
          na_hydroControls +
          '\n' +
          ok_hydroControls +
          '\n' +
          rr_hydroControls,
        column3:
          na_glass +
          '\n' +
          ok_glass +
          '\n' +
          rr_glass +
          '\n' +
          na_mirror +
          '\n' +
          ok_mirror +
          '\n' +
          rr_mirror +
          '\n' +
          na_rollOver +
          '\n' +
          ok_rollOver +
          '\n' +
          rr_rollOver +
          '\n' +
          na_seat +
          '\n' +
          ok_seat +
          '\n' +
          rr_seat +
          '\n' +
          na_steering +
          '\n' +
          ok_steering +
          '\n' +
          rr_steering +
          '\n' +
          na_leaks +
          '\n' +
          ok_leaks +
          '\n' +
          rr_leaks +
          '\n' +
          na_oil +
          '\n' +
          ok_oil +
          '\n' +
          rr_oil +
          '\n' +
          na_coolant +
          '\n' +
          ok_coolant +
          '\n' +
          rr_coolant +
          '\n' +
          na_hydroOil +
          '\n' +
          ok_hydroOil +
          '\n' +
          rr_hydroOil +
          '\n' +
          na_transFluid +
          '\n' +
          ok_transFluid +
          '\n' +
          rr_transFluid +
          '\n' +
          na_fuel +
          '\n' +
          ok_fuel +
          '\n' +
          rr_fuel,
        defects: defects,
        repairsNeeded: repairsNeeded,
        operatorInitals: operatorInitals,
        mechanicInitals: mechanicInitals,
      })
      .then(() => {
        console.log('successfully sent the data');
      });
  };

  dataClick = () => {
    this.onDataSubmit(
      this.state.company,
      this.state.date,
      this.state.location,
      this.state.job_num,
      this.state.equipment,
      this.state.hour_meter,
      this.state.mileage,
      this.state.na_lights,
      this.state.ok_lights,
      this.state.rr_lights,
      this.state.na_steps,
      this.state.ok_steps,
      this.state.rr_steps,
      this.state.na_tires,
      this.state.ok_tires,
      this.state.rr_tires,
      this.state.na_exhaust,
      this.state.ok_exhaust,
      this.state.rr_exhaust,
      this.state.na_fenders,
      this.state.ok_fenders,
      this.state.rr_fenders,
      this.state.na_bucket,
      this.state.ok_bucket,
      this.state.rr_bucket,
      this.state.na_cuttingEdge,
      this.state.ok_cuttingEdge,
      this.state.rr_cuttingEdge,
      this.state.na_lift,
      this.state.ok_lift,
      this.state.rr_lift,
      this.state.na_hoses,
      this.state.ok_hoses,
      this.state.rr_hoses,
      this.state.na_fittingsG,
      this.state.ok_fittingsG,
      this.state.rr_fittingsG,
      this.state.na_hitch,
      this.state.ok_hitch,
      this.state.rr_hitch,
      this.state.na_wipers,
      this.state.ok_wipers,
      this.state.rr_wipers,
      this.state.na_bCable,
      this.state.ok_bCable,
      this.state.rr_bCable,
      this.state.na_fanBelt,
      this.state.ok_fanBelt,
      this.state.rr_fanBelt,
      this.state.na_engineHose,
      this.state.ok_engineHose,
      this.state.rr_engineHose,
      this.state.na_airFilter,
      this.state.ok_airFilter,
      this.state.rr_airFilter,
      this.state.na_guards,
      this.state.ok_guards,
      this.state.rr_guards,
      this.state.na_brakesS,
      this.state.ok_brakesS,
      this.state.rr_brakesS,
      this.state.na_brakesP,
      this.state.ok_brakesP,
      this.state.rr_brakesP,
      this.state.na_backup,
      this.state.ok_backup,
      this.state.rr_backup,
      this.state.na_fire,
      this.state.ok_fire,
      this.state.rr_fire,
      this.state.na_gauges,
      this.state.ok_gauges,
      this.state.rr_gauges,
      this.state.na_horn,
      this.state.ok_horn,
      this.state.rr_horn,
      this.state.na_hydroControls,
      this.state.ok_hydroControls,
      this.state.rr_hydroControls,
      this.state.na_glass,
      this.state.ok_glass,
      this.state.rr_glass,
      this.state.na_mirror,
      this.state.ok_mirror,
      this.state.rr_mirror,
      this.state.na_rollOver,
      this.state.ok_rollOver,
      this.state.rr_rollOver,
      this.state.na_seat,
      this.state.ok_seat,
      this.state.rr_seat,
      this.state.na_steering,
      this.state.ok_steering,
      this.state.rr_steering,
      this.state.na_leaks,
      this.state.ok_leaks,
      this.state.rr_leaks,
      this.state.na_oil,
      this.state.ok_oil,
      this.state.rr_oil,
      this.state.na_coolant,
      this.state.ok_coolant,
      this.state.rr_coolant,
      this.state.na_hydroOil,
      this.state.ok_hydroOil,
      this.state.rr_hydroOil,
      this.state.na_transFluid,
      this.state.ok_transFluid,
      this.state.rr_transFluid,
      this.state.na_fuel,
      this.state.ok_fuel,
      this.state.rr_fuel,
      this.state.defects,
      this.state.repairsNeeded,
      this.state.repairsNotNeeded,
      this.state.operatorInitals,
      this.state.mechanicInitals
    );
    this.props.history.push('/datasent');
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
      [event.target.name]: event.target.checked,
    });
  };

  validateInput = () => {
    const comp = this.state.company;
    const loc = this.state.location;
    const job = this.state.job_num;
    const equip = this.state.equipment;

    if (
      comp.trim() == '' ||
      loc.trim() == '' ||
      job.trim() == '' ||
      equip.trim() == ''
    ) {
      this.setState({ hasError: true });
      console.log('error field not filled or id already chosen');
    } else {
      this.dataClick();
    }
  };

  checkDatabaseID = (arr, val) => {
    return arr.some((arrVal) => val === arrVal);
  };

  getInspectionForm_id = () => {
    axios.get('http://34.229.169.195:5000/inspection_id').then((response) => {
      this.setState({ jobArray: response.data }); // the auto-incremented sql id is included in this response.data object

      console.log(response.data);
      console.log('successfully retrieved the data');
    });
  };

  componentDidMount() {
    window.addEventListener('load', this.getInspectionForm_id());
  }

  render() {
    const infoMessage = () => {
      if (!this.state.hasError) {
        return (
          <div>
            <b>
              Company, Location, Job Number, and Equipment must all be filled
              out before submitting
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
                Company, Location, Job Number, and Equipment must all be filled
                out before submitting
              </h3>
              <h3>And/Or Job Number must be unique</h3>
            </font>
          </div>
        );
      }
    };

    return (
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
          <div
            className="border"
            style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <form>
              <div style={{ paddingLeft: '20px' }}>
                <h1>Equipment Inspection Form</h1>
                {infoMessage()}
                <br />
                {errorMessage()}
                <br />
              </div>

              <div className="inspect-info">
                <input
                  placeholder="Company"
                  name="company"
                  onChange={(event) => this.onChange(event)}
                  value={this.state.value}
                />
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={(event) =>
                    this.setState({ date: event.target.value })
                  }
                />
                <input
                  placeholder="Locatoin"
                  name="location"
                  onChange={(event) => this.onChange(event)}
                  value={this.state.value}
                />
                <input
                  type="number"
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
                  type="number"
                  precision={2}
                  step={0.01}
                  min={0}
                  placeholder="Hour Meter"
                  name="hour_meter"
                  onChange={(event) => this.onChange(event)}
                  value={this.state.value}
                />
                <input
                  type="number"
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
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b>Outside</b>
                    <b>NA OK RR</b>
                  </div>
                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_lights"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_lights"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_lights"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Lights</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_steps"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_steps"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_steps"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Steps/Hand Rails</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_tires"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_tires"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_tires"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Tires/Tracks</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_exhaust"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_exhaust"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_exhaust"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Exhaust</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_fenders"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_fenders"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_fenders"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Fenders</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_bucket"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_bucket"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_bucket"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Bucket</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_cuttingEdge"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_cuttingEdge"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_cuttingEdge"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Cutting Edge/Teeth</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_lift"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_lift"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_lift"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Lifting Mechanism</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_hoses"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_hoses"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_hoses"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Hoses</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_fittingsG"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_fittingsG"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_fittingsG"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Fittings Greased</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_hitch"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_hitch"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_hitch"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Hitch/Coupler</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_wipers"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_wipers"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_wipers"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Wipers</label>
                  </div>
                </div>

                <div className="column2">
                  <b>Engine Compartment</b>
                  <b>NA OK RR</b>
                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_bCable"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_bCable"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_bCable"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Battery Cable</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_fanBelt"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_fanBelt"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_fanBelt"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Fan Belt</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_engineHose"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_engineHose"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_engineHose"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Hoses</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_airFilter"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_airFilter"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_airFilter"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Air Filter</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_guards"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_guards"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_guards"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Guards</label>
                  </div>

                  <b>Engine Compartment</b>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_brakesS"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_brakesS"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_brakesS"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Brakes, Service</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_brakesp"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_brakesP"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_brakesP"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Brakes, Parking</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_backup"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_backup"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_backup"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Backup Alarm</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_fire"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_fire"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_fire"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Fire Extinguisher</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_gauges"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_gauges"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_gauges"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Gauges</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_horn"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_horn"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_horn"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Horn</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_hydroControls"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_hydroControls"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_hydroControls"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Hydraulic Controls</label>
                  </div>
                </div>

                <div className="column2">
                  <b>Inside Cab (cont.)</b>
                  <b>NA OK RR</b>
                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_glass"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_glass"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_glass"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Glass (all sides)</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_mirror"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_mirror"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_mirror"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Mirror</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_rollOver"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_rollOver"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_rollOver"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Roll Over Protection</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_seat"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_seat"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_seat"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Seat Belt/Seat</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_steering"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_steering"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_steering"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Steering</label>
                  </div>

                  <b>Fluids</b>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_leaks"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_leaks"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_leaks"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Visible Leaks</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_oil"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_oil"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_oil"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Oil Level/Pressure</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_coolant"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_coolant"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_coolant"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Coolant Level (check only when COLD)</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_hydroOil"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_hydroOil"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_hydroOil"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Hydraulic Oil Level</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_transFluid"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_transFluid"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_transFluid"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Transmission Fluid Level</label>
                  </div>

                  <div className="checkRow">
                    <input
                      type="checkbox"
                      name="na_fuel"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="ok_fuel"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <input
                      type="checkbox"
                      name="rr_fuel"
                      onChange={(event) => this.handleCheck(event)}
                    />
                    <label> Fuel Level</label>
                  </div>
                </div>
              </div>

              <br />

              <div style={{ paddingLeft: '20px' }}>
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
                <input
                  type="checkbox"
                  name="repairsNeeded"
                  onChange={(event) => this.handleCheck(event)}
                />
                <label> Repairs or adjustments needed</label>
                <div style={{ paddingLeft: '20px' }}>
                  <input
                    type="checkbox"
                    name="repairsNotNeeded"
                    onChange={(event) => this.handleCheck(event)}
                  />
                  <label>
                    {' '}
                    Repairs or Adjustments NOT needed for safe equipment
                    operation
                  </label>
                </div>
              </div>

              <br />

              <div style={{ paddingLeft: '20px' }}>
                <b>Operator's Initals: </b>
                <input
                  className="initals"
                  placeholder="Enter Initals"
                  name="operatorInitals"
                  onChange={(event) => this.onChange(event)}
                  value={this.state.value}
                />
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <b>Mechanic's Initals: </b>
                <input
                  className="initals"
                  placeholder="Enter Initals"
                  name="mechanicInitals"
                  onChange={(event) => this.onChange(event)}
                  value={this.state.value}
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
}

export default InspectionForm;
