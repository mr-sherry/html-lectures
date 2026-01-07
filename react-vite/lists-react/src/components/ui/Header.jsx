import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
  let redirect = useNavigate();

  function login() {
    // try {
    //   success;
    redirect('/');
    // window.location.href = '/';
    // } catch (error) {
    //   error;
    // }
  }

  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>home</Link>
        </li>
        <li>
          <NavLink to={'/about'}>about</NavLink>
        </li>
        <button onClick={login}>open home</button>
      </ul>
    </div>
  );
}

export default Header;
