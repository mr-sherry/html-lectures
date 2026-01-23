// import { useEffect, useState } from 'react';
// import Users from './components/Users';
// import useLocalStorage from './hooks/useLocalStorage';

import Ref from './components/Ref';

function App() {
  // const [input, setInput] = useState();
  // const [localItem, submit] = useLocalStorage(input);

  return (
    <div>
      {/* <input
        type='text'
        name=''
        id=''
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submit}>save</button>
      <Users />
      <h1>input value from local:{localItem}</h1> */}
      <Ref />
    </div>
  );
}

export default App;
