import React from 'react';
import './WeatherDelay.css';

class WeatherDelay extends React.Component {
  state = {
    notes: '',
    start: '',
    end: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="weather-delay">
        <form>
          <div className="weather-inputs">
            <input
              className="weather-notes"
              placeholder="Weather Delay Notes"
              name="notes"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              className="weather-start"
              placeholder="Delay Start"
              name="start"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              className="weather-end"
              placeholder="Delay End"
              name="end"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default WeatherDelay;
