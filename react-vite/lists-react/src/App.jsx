import { useState } from 'react';

function App() {
  const [data, setData] = useState(['sadkldksa', 'safasda', 'asdasdas']);

  function handleSave() {
    let std = {
      data: [
        {
          id: 1,
          name: 'Ali Khan',
          age: 20,
          grade: 'A',
          major: 'Computer Science',
          email: 'ali.khan@example.com',
        },
        {
          id: 2,
          name: 'Sara Ahmed',
          age: 22,
          grade: 'B+',
          major: 'Information Technology',
          email: 'sara.ahmed@example.com',
        },
        {
          id: 3,
          name: 'Hassan Raza',
          age: 21,
          grade: 'A-',
          major: 'Software Engineering',
          email: 'hassan.raza@example.com',
        },
      ],
    };
    setData(std);
  }

  return (
    <>
      <div>main</div>
      <ul>
        {data.data
          ? data.data.map((item, index) => (
              <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.major}</p>
              </div>
            ))
          : data.map((item, index) => <li key={index}>{item}</li>)}

        {/* 
        {data.map(() => (<div>{}</div>))}
        {data? (data.map(() => ()) data.map(() => ())data.map(() => ())data.map(() => ())data.map(() => ())) : (data.map(() => ()))} */}
      </ul>
      <button onClick={handleSave}>Add Data</button>
    </>
  );
}

export default App;
