import React, { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  console.log(url);

  async function fetchData() {
    try {
      let res = await fetch(url);
      let dataGot = await res.json();
      if (res.ok) {
        console.log(dataGot);
        setData(dataGot);
      } else {
        console.log('error while fetching');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
}

export default useFetch;
