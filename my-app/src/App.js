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
          <Map/>
          <List />
      </div>
    </div>
  );
}

export default App;
