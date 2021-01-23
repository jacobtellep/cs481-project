import React from 'react';
import './JobDescription.css';

class JobDescription extends React.Component {
  state = { description: '' };

  onSubmit = (event) => {
    // this is a method that I created. It could be named anything it doesnt have to be named onSubmit
    event.preventDefault(); // this prevent default method keeps the enter key from clearing the fields (which is the default function of the <form>)
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //using the setState method is how you update the values of state elements.
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
