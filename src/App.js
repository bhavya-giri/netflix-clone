import React from 'react';

import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="app">
     
      <Routes>
        <Route exact path="/" element={ <HomeScreen/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
