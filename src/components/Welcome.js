import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => (
  <div>
    <h1>Welcome!</h1>
    <button><Link to='/login'>Login</Link></button>
    <button><Link to='/signup'>Signup</Link></button>
    <button><Link to='/dashboard'>Dashboard</Link></button>
  </div>
);

export default Welcome;