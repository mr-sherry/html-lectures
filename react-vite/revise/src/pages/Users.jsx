import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to={'/profile/user1'}>user1</Link>
      <Link to={'/profile/user2'}>user2</Link>
      <Link to={'/profile/user3'}>user3</Link>
      <Link to={'/profile/user4'}>user4</Link>
          <Link to={'/profile/user5'}>user5</Link>
          
    </div>
  );
}

export default Users;
