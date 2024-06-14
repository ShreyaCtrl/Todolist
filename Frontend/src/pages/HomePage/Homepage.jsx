import React from 'react'
import Navbar from '../../components/Navbar';
import Todos from '../../components/Todos';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Todos />
    </div>
  );
}

export default Homepage;