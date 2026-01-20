import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Pro from './pages/Pro';

function App() {
  // let [btn, setBtn] = useState(0);
  // const [users, setUsers] = useState(null);
  // async function fetchData() {
  //   try {
  //     let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     let data = await resp.json();

  //     if (!resp.ok) {
  //       console.log('error');
  //     } else {
  //       console.log(data);
  //       setUsers(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   console.log(btn);
  //   // console.log(users);
  //   fetchData();
  // }, [btn]);

  return (
    // <div>
    //   <button onClick={() => setBtn(btn + 1)}>fetch</button>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/users' element={<Users />} />

        {/* <Route path='/profile' element={<Pro />} /> */}

        <Route path='/profile' element={<Pro />}>
          <Route path=':username' element={<Profile />} />
          <Route path=':username' element={<Profile />} />
          <Route path=':username' element={<Profile />} />
          <Route path=':username' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
