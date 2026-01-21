import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function ContextProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function switchTheme() {
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ContextProvider;
