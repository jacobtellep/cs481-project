import React from 'react';
import './ProjectDelay.css';

class ProjectDelay extends React.Component {
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
      <div className="project-delay">
        <form>
          <div className="project-inputs">
            <input
              className="project-notes"
              placeholder="Project Delay Notes"
              name="notes"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              className="project-start"
              placeholder="Delay Start"
              name="start"
              onChange={(event) => this.onChange(event)}
              value={this.state.value}
            />
            <input
              className="project-end"
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

export default ProjectDelay;
