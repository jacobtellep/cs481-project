import React from 'react';
import './JobInfo.css';

class JobInfo extends React.Component {
  state = {
    date: '',
    customer: '',
    project: '',
    contractNumber: '',
    foreman: '',
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
      <div className="job-info">
        <form>
          <div className="job-info-inputs">
            <input
              placeholder="Date"
              name="date"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              placeholder="Customer"
              name="customer"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              placeholder="Project"
              name="project"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              placeholder="Contract Number"
              name="contractNumber"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              placeholder="Foreman/Lead Man"
              name="foreman"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default JobInfo;
