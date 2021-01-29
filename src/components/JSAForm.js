import React from 'react';
import JSAinfo from './JSAForm/JSAinfo';
import JSAWeather from './JSAForm/JSAWeather';
import JSAHazard from './JSAForm/JSAHazards';
import JSAHazardSteps from './JSAForm/JSAHazardSteps';

class JSAForm extends React.Component {

    render() {
        return(
            <div>
                <h1 style={{paddingLeft: "20px"}}>Job Safety Analysis Form</h1>

                <div style={{display: "flex", flexDirection: "row"}}>
                <JSAinfo />
                <JSAWeather />
                </div>

                <br />
                <JSAHazard />

                <br />
                <JSAHazardSteps />
                <JSAHazardSteps />
                <JSAHazardSteps />
                <JSAHazardSteps />
                <JSAHazardSteps />
                <JSAHazardSteps />
                <JSAHazardSteps />

            </div>
        );
    };
};

export default JSAForm;
