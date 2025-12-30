import React from 'react';
import Button from '../Button';

function Hero({ number }) {
  return (
    <div>
      <h1>hello</h1>
      <div>npm create vite@latest project-name</div>
      <div>cd project-name</div>
      <div>npm install</div>
      <div>npm run dev</div>

      <h1>Number from page: {number}</h1>

      <Button text={'Login'} padding={'20px'} />
      <Button text={'register'} padding={'10px'} />
      <Button text={'submit'} padding={'50px'} />
    </div>
  );
}

export default Hero;
