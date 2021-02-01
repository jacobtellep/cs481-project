import React from 'react';
import './JSAHazardSteps.css';

class JSAHazardSteps extends React.Component{
    state = {
        major_steps: '',
        potential_hazards: '',
        recommendations: ''
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
            <div className="hazard-steps">
                <form>
                    <div className="hazard-steps-input">
                        <input
                          className="textbox"
                          placeholder="Major Job Steps"
                          name="major_steps"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="textbox"
                          placeholder="Potential Hazards/Consquences"
                          name="potential_hazards"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                        <input
                          className="textbox"
                          placeholder="Recommendations to Remove Hazard"
                          name="recommendations"
                          onChange={(event) => this.onChange(event)}
                          value={this.state.value}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default JSAHazardSteps;
