import React, { useEffect } from 'react';

import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

function App() {
  const user = null;
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //logged in
      }else{
        //logged out
      }
    })
    return unsubscribe;
  },[])
  return (
    <div className="app">
     {!user ? 
     (<LoginScreen/>):(   <Routes>
      <Route exact path="/" element={ <HomeScreen/>} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>)}
   
    </div>
  );
}

export default App;
