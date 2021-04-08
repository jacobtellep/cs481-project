import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './pricing.css';

const Pricing = () => {
  const [selectValue, setSelectValue] = useState('');
  const [pricing, setPricing] = useState([]);

  const getPricing = () => {
    axios
      .get('http://localhost:5000/pricing', {
        params: { partGroup: selectValue },
      })
      .then((response) => {
        setPricing(response.data);

        console.log(response.data);
        console.log('successfully retrieved the data');
      });
  };

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h1>Material Pricing</h1>
      <div
        className="border"
        style={{
          display: 'flex',
          marginLeft: '10px',
          marginRight: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '700px',
        }}>
        <b>Select Part Group</b>
        <select
          className="ui select"
          style={{
            marginTop: '10px',
            marginLeft: '10px',
            color: 'black',
            backgroundColor: 'white',
            width: '150px',
            border: '2px solid black',
            borderRadius: '4px',
          }}
          value={selectValue}
          onChange={handleChange}>
          <option defaultValue> Select Part Group</option>
          <option value="arrestor">Arrestor</option>
          <option value="bolts_nuts_screws">Bolt, Nut, Screw</option>
          <option value="breakers">Breaker</option>
        </select>
        <button
          style={{
            color: 'black',
            backgroundColor: 'peachpuff',
            width: '100px',
            margin: '10px',
            marginLeft: '10px',
            border: '2px solid black',
          }}
          onClick={getPricing}
          className="ui button"
          type="button">
          Retrieve
        </button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div>
          <table>
            <tr>
              <th>Part Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Cost</th>
              <th>Part Group</th>
            </tr>

            {pricing.map((str) => (
              <tr>
                <td>{str.part_name}</td>
                <td>{str.description}</td>
                <td>${str.price}</td>
                <td>${str.cost}</td>
                <td>{str.part_group}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
