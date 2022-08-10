import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav'
import './ProfileScreen.css'
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const ProfileScreen = () => {
  // const user = useSelector(selectUser);
  
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
                <div className='profileScreen__details'>
                    <h2>bhavya.giri44@gmail.com</h2>
                    <div className='profileScreen__plans'>
                      <button onClick={()=> auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen