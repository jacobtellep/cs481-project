import React from 'react';
import { Link } from 'react-router-dom';
import logo from './arrow-left.svg';

const BackButton = (props) => {
  return (
    <Link to={props.path}>
      <img
        style={{
          width: '25px',
          margin: '10px',
        }}
        src={logo}
      />
    </Link>
  );
};

export default BackButton;
