import React from 'react';

const WrongPermissions = () => {
  return (
    <div>
      <h1
        style={{
          color: 'red',
          margin: '30px',
          width: '650px',
        }}
        className="border">
        You do not have the correct permissions to view any forms.
      </h1>
    </div>
  );
};

export default WrongPermissions;
