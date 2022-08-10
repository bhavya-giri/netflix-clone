import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const [show,handleShow] = useState(false);
    const history = useNavigate();
    const transitionNavbar =()=>{
        if(window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };
    useEffect (()=>{
        window.addEventListener('scroll',transitionNavbar);
        return ()=> window.removeEventListener('scroll',transitionNavbar);
    },[])
  return (
    <div className={`nav ${show && 'nav__black'} `}>
        <div className='nav__contents'>
        <img className='nav__logo'
        onClick={()=>{history('/')}}
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
        alt=''/>
        <img onClick={()=>{history("/profile")}}
        className='nav__avatar' 
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
        alt=''/>
        
        </div>
       
    </div>
  )
}

export default Nav