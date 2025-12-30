import { useState } from 'react';
import Button from './components/Button';
import Features from './components/home/Features';
import Hero from './components/home/Hero';
import Reviews from './components/home/Reviews';

function App() {
  const [number, setNumber] = useState(0);
  // let number = 0;

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>count{number}</button>
      <Hero number={number} />
      <Features />
      <Reviews />

      <Link to={'/ahmedraza'}>About</Link>
    </>
  );
}

export default App;
