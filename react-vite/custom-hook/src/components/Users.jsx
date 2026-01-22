import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function Users() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/comments');

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>hello</div>;
}

export default Users;
