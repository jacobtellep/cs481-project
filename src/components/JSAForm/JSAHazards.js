import React from 'react';
import './JSAHazards.css'

class JSAHazard extends React.Component {
    state = { emergencyAddress: '', medicalFacility: '' };

    onSubmit = (event) => {
      event.preventDefault();
    };

    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value, //using the setState method is how you update the values of state elements.
      });
    };

    render() {
        return(
            <div className="jsa-hazards">
                <form>
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
                            <input type="checkbox" id="hazard-confinedSpace" />
                            <label for="defaultUnchecked"> Confined Space</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-fall" />
                            <label for="defaultUnchecked"> Fall Protection</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-sharp" />
                            <label for="defaultUnchecked"> Sharp/Hot/Cold Surfaces</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-electric" />
                            <label for="defaultUnchecked"> Electric Shock Hazard</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-irritants" />
                            <label for="defaultUnchecked"> Irritants-Respiratory/Skin</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-extremes" />
                            <label for="defaultUnchecked"> Environment Extremes</label>
                            </div>
                        </div>

                        <div className="column2">
                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-pinch-crush" />
                            <label for="defaultUnchecked"> Pinch/Crush/Strike Hazard</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-lifting" />
                            <label for="defaultUnchecked"> Lifting Hazard</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-shortService" />
                            <label for="defaultUnchecked"> Short Services Employees</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-explosion" />
                            <label for="defaultUnchecked"> Fore or Explosion Potential</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-energy" />
                            <label for="defaultUnchecked"> Potential Release of Energy</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-stop" />
                            <label for="defaultUnchecked" style={{whiteSpace: "nowrap"}}> We ALL have the right and obligation to STOP WORK if unsafe conditions or acts are present</label>
                            </div>
                        </div>

                        <div className="column3">
                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-elevated" />
                            <label for="defaultUnchecked"> Elevated Work Load</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-excavation" />
                            <label for="defaultUnchecked"> Excavation</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-chemical" />
                            <label for="defaultUnchecked"> Hazardous Chemical Exposure</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-noise" />
                            <label for="defaultUnchecked"> High Noise Level</label>
                            </div>

                            <div className="checkbox-label">
                            <input type="checkbox" id="hazard-water" />
                            <label for="defaultUnchecked"> Water or Drowning Hazard</label>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );
    };
}

export default JSAHazard;
