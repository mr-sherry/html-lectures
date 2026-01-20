import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  let { username } = useParams();

  return <div>{username}</div>;
}

export default Profile;
