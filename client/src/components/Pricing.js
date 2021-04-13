import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './pricing.css';
import BackButton from './BackButton';

const Pricing = () => {
  const [selectValue, setSelectValue] = useState('');
  const [pricing, setPricing] = useState([]);
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();

  const getPricing = async () => {
    const token = await getAccessTokenSilently({
      audience: 'http://localhost:5000/',
      scope: 'view:forms',
    });

    axios
      .get('http://localhost:5000/pricing', {
        params: { partGroup: selectValue },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPricing(response.data);
      })
      .catch((error) => {
        if (error.response) {
          history.push('/wrongpermissions');
        }
      });
  };

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <div>
        <BackButton path="/" />
      </div>
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
            placeholder="Select Part Group"
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
            <option value="arrestor">Arrestors</option>
            <option value="bolts_nuts_screws">Bolt, Nut, Screw</option>
            <option value="breakers">Breakers</option>
            <option value="bushings">Bushings</option>
            <option value="cadweld">Cadwelds</option>
            <option value="disconnects">Disconnects</option>
            <option value="fuses">Fuses</option>
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
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Cost</th>
                  <th>Part Group</th>
                </tr>

                {pricing.map((str) => (
                  <tr key={str.part_id}>
                    <td>{str.part_name}</td>
                    <td>{str.description}</td>
                    <td style={{ color: 'red', fontWeight: 'bold' }}>
                      ${str.price}
                    </td>
                    <td>${str.cost}</td>
                    <td>{str.part_group}</td>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
