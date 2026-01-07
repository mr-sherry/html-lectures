// import { useState } from 'react';
// import Card from './components/Card';
// import StateUp from './components/StateUp';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/home';
import Header from './components/ui/Header';

function App() {
  // const [nameFromChild, setNameFromChild] = useState('gotName');
  return (
    // <div>
    //   {/* <StateUp text={'hello'} sendName={setNameFromChild} />
    //   <h1>name from child: {nameFromChild}</h1> */}

    //   <div>home</div>
    //   <Card>
    //     {/* <img
    //       src='https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80'
    //       alt=''
    //       width={200}
    //       height={200}
    //     /> */}
    //   </Card>
    // </div>
    <>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
