import React from 'react';
import './JSAinfo.css';

class JSAinfo extends React.Component{
    state = {
        ticket_num: '',
        date: '',
        company: '',
        representative: '',
        location: '',
        well_num: '',
        afe_num: ''
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
        return(
            <div className="jsa-info">
                <form>
                    <div className="jsa-info-input">
                        <input
                            placeholder="Ticket Number"
                            name="ticket_num"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                        <input
                            placeholder="Date"
                            name="jsa-date"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                        <input
                            placeholder="Company"
                            name="jsa-company"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                        <input
                            placeholder="Representative"
                            name="jsa-representative"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                        <input
                            placeholder="Locatoin"
                            name="jsa-location"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                        <input
                            placeholder="Well Number"
                            name="well_num"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                        <input
                            placeholder="AFE Number"
                            name="afe_num"
                            onChange={(event) => this.onChange(event)}
                            value={this.state.value}
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default JSAinfo;
