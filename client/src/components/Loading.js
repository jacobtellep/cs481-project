import React from 'react';

const Loading = () => (
  <div class="ui segment" style={{ padding: '10px' }}>
    <div class="ui active inverted dimmer centered inline">
      <div class="ui huge loader"></div>
    </div>
    <p></p>
  </div>
);

export default Loading;
