import React from 'react';
import Navbar from './Component/Navbar';
import List from './Component/List';
import Map from './Component/Map';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div><Map/></div>
        <div><List /></div>
          
      </div>
    </div>
  );
}

export default App;
