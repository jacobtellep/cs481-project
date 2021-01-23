import React from 'react';
import './JobDescription.css';

class JobDescription extends React.Component {
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
      <div className="job-description">
        <form>
          <div>
            <textarea
              className="job-description-input"
              placeholder="Job Description"
              name="description"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default JobDescription;
