import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
// import styles from './Header.module.css';
function Header() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      Header
      <button style={{ color: 'red' }} onClick={switchTheme}>
        Theme
      </button>
      <h1>{theme}</h1>
    </div>
  );
}

export default Header;
