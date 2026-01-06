import React, { useEffect, useState } from 'react';

function Useeffect() {
  const [update, setUpdate] = useState(true);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function FetchData() {
    try {
      let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await resp.json();
      if (resp.ok) {
        setPosts(data);
        console.log(data);
      } else {
        setError('Data fetching failed Please Refresh Page...');
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, [update]);
  return (
    <div>
      <h1>hello</h1>
      <button onClick={() => setUpdate(!update)}>Fetch Again</button>
      <div>
        <h1>Posts</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {loading ? (
            <h1>Loading posts.....</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            posts.map((post, index) => (
              <div
                key={index}
                style={{
                  border: '2px solid black',
                  padding: '20px',
                  width: '250px',
                }}
              >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Useeffect;
