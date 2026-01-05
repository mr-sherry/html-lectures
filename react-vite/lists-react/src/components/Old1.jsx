import React from 'react';
import { useState } from 'react';

function Old1() {
  const [inputValue, setInputValue] = useState(localStorage.getItem('name'));
  const [disable, setDisable] = useState(localStorage.getItem('update'));

  // let update = ;
  // setDisable(update);

  function handleSubmit(e) {
    e.preventDefault();
    setDisable(true);
    localStorage.setItem('name', inputValue);
    localStorage.setItem('update', true);
  }
  return (
    <>
      <div>main</div>

      <h1>Name:{inputValue}</h1>
      <form action=''>
        <label htmlFor=''>name</label> <br />
        <input
          type='text'
          name=''
          id=''
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          disabled={disable ? true : false}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Old1;
