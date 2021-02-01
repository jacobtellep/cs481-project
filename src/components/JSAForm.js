import React from 'react';
import JSAinfo from './JSAForm/JSAinfo';
import JSAWeather from './JSAForm/JSAWeather';
import JSAHazard from './JSAForm/JSAHazards';
import JSAHazardSteps from './JSAForm/JSAHazardSteps';
import JSABidwork from './JSAForm/JSABidwork'

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
                <br />

                <h3 style={{paddingLeft: "20px"}}>All Contractors and/or Personnel must read and sign this JSA form to work on or around G L Services area
                of Operations. <br/ > DO NOT sign this form if you have not read and FULLY understand the activities that G L Services is engaged in
                <br />and that you are participating in.</h3>
                
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />
                <JSABidwork />


            </div>
        );
    };
};

export default JSAForm;
