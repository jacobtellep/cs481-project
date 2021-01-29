import React from 'react';
import './JSAWeather.css'

class JSAWeather extends React.Component{
    state = {jsa_current_temp: ''};

    onSubmit = (event) => {
      event.preventDefault();
    };

    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    render() {
        return(
            <div className="jsa-weather">
                <h3 style={{position:"relative", top: "20px"}}>Weather</h3>
                <form>
                    <div className="jsa-weather-input">
                        <div className="checkbox-label">
                        <input type="checkbox" id="weather-sun" />
                        <label for="defaultUnchecked"> Sun</label>
                        </div>

                        <div className="checkbox-label">
                        <input type="checkbox" id="weather-rain" />
                        <label for="defaultUnchecked"> Rain</label>
                        </div>

                        <div className="checkbox-label">
                        <input type="checkbox" id="weather-overcast" />
                        <label for="defaultUnchecked"> Overcast</label>
                        </div>

                        <div className="checkbox-label">
                        <input type="checkbox" id="weather-windy" />
                        <label for="defaultUnchecked"> Windy</label>
                        </div>

                        <div className="checkbox-label">
                        <input type="checkbox" id="weather-hail" />
                        <label for="defaultUnchecked"> Hail</label>
                        </div>

                        <div className="checkbox-label">
                        <input type="checkbox" id="weather-snow" />
                        <label for="defaultUnchecked"> Snow</label>
                        </div>

                        <input
                          placeholder="Current Temp"
                          name="jsa_current_temp"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />

                    </div>
                </form>
            </div>
        );
    };
};

export default JSAWeather;
