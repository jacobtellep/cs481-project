import React from 'react';
import './BidWork.css';

class BidWork extends React.Component {
  state = {};

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
      <div className="bid-work">
        <form>
          <div className="bid-work-inputs">
            <input
              className="employee-name"
              placeholder="Employee Name"
              name="notes"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              className="hours"
              placeholder="Hours"
              name="start"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              className="job-number"
              placeholder="Job Number"
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

export default BidWork;
