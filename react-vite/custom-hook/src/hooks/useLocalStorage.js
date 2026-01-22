import React, { useEffect, useState } from 'react';

function useLocalStorage(input) {
  const [localItem, setLocalItem] = useState('no value');
  function submit() {
    localStorage.setItem('input', input);
    //   https://usehooks.com/
  }

  useEffect(() => {
    let inp = localStorage.getItem('input');
    setLocalItem(inp);
  }, []);

  return [localItem, submit];
}

export default useLocalStorage;
