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
      <div
        className="bid-work" /* divs are just containers that hold other JSX elements. theyre regular html*/
      >
        <form /* form tags enable some features to allow form submition */>
          <div className="bid-work-inputs">
            <input
              className="employee-name" // classNames are used for css styling
              placeholder="Employee Name"
              name="notes" // this name is used in the above onChange function
              onChange={(event) => this.onChange(event)} // this is a React event handler. if the text changes, the state object is updated with the change
              value={this.state.value} // this takes the value of the state object element and displays it in the input
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
