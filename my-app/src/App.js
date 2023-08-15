import React from 'react';
import Navbar from './Component/Navbar';
import List from './Component/List';
import Map from './Component/Map';
import './App.css';
import Splinemap from './Component/Splinemap';


function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div><Splinemap/></div>
        <div><List /></div>
          
      </div>
    </div>
  );
}

export default App;
