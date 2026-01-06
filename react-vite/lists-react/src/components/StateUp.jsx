import React, { useState } from 'react';
import Useeffect from './Useeffect';

function StateUp({ text = 'ali', sendName }) {
  const [name, setName] = useState('NEW');
  

  function upLift() {
    sendName(name);
  }

  return (
    <>
      <div>{text}</div>
      <h1>{name}</h1>
      <button onClick={upLift}>click</button>
    </>
  );
}

export default StateUp;
