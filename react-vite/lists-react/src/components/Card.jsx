import React from 'react';

function Card({
  title = 'hello',
  para = 'ajjajajajjjjjjjjjjjjjjjjjjjjjjjj',
  buttonText = 'submit',
  children,
}) {
  return (
    <>
      <div
        style={{ border: '2px solid black', padding: '10px', width: '200px' }}
      >
        {children}
        <h1>{title}</h1>
        <p>{para}</p>
        <button>{buttonText}</button>
      </div>
    </>
  );
}

export default Card;
