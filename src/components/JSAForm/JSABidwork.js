import React from 'react';
import './JSABidwork.css'

class JSABidwork extends React.Component {
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
        return(

            <div className="JSABidwork">
                <form>
                    <input
                      className="employee-name"
                      placeholder="Print Name"
                      name="print-name"
                      onChange={(event) => this.onChange(event)}
                      value={this.state.value}
                    />
                <input
                    className="initals"
                    placeholder="Enter Initals"
                    name="employee-initals"
                    onChange={(event) => this.onChange(event)}
                    value={this.state.value}
                    />
                </form>
            </div>

        );
    };
};

export default JSABidwork;
