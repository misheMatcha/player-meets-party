import React from 'react';

const Doubletake = props => {
  return(
    <div>
      im a double take!<br/>
      <button onClick={() => {
        props.logout();
      }}>logout</button>
    </div>
  );
};

export default Doubletake;