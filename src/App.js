import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { logout,login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';


function App() {
  const user =  1;
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        
        // dispatch(
        //   login({
        //     uid : userAuth.uid,
        //     email:userAuth.email,
        //   })
        // );
      }else{
        
        // dispatch(logout());
      }
    });
    return unsubscribe;
  },[]);
  // },[dispatch]);
  return (
    <div className="app">
     {!user ? 
     (<LoginScreen/>):(   <Routes>
      <Route exact path="/" element={ <HomeScreen/>} />
      <Route path="/profile" element={<ProfileScreen/>} />
    </Routes>)}
   
    </div>
  );
}

export default App;
