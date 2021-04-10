import React from 'react';

const WrongPermissions = () => {
  return (
    <div>
      <h1
        style={{
          color: 'red',
          margin: '30px',
          width: '650px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="border">
        You do not have the correct permissions.
      </h1>
    </div>
  );
};

export default WrongPermissions;
