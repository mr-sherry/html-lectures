import { useState } from 'react';
import Card from './components/Card';
// import StateUp from './components/StateUp';

function App() {
  // const [nameFromChild, setNameFromChild] = useState('gotName');
  return (
    <div>
      {/* <StateUp text={'hello'} sendName={setNameFromChild} />
      <h1>name from child: {nameFromChild}</h1> */}

      <div>home</div>
      <Card>
        {/* <img
          src='https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80'
          alt=''
          width={200}
          height={200}
        /> */}
      </Card>
    </div>
  );
}

export default App;
