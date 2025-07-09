import React, { useContext, useState } from 'react'
import "./Header.css"
import logo from "../assets/food_logo.png"
import { ImSwitch } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/auth-context';

const Header = () => {
 
  const authCtx = useContext(AuthContext);

window.addEventListener('scroll',()=>{
  const heading = document.querySelector(".heading");
  const scrollY = window.scrollY;

  if(scrollY > 200){
    heading.style.position = "sticky";
  }else{
     heading.style.position = "absolute";
  }

})

const handleCkick = () => {
   

    authCtx.login(true);
}

  return (
    <React.Fragment>
    <nav className='heading'>
      
      <div className='logo'></div>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/food">Food</Link></li>
        
        <li><Link to="/drink">Drinks</Link></li>
        <li><Link to="/health-issues">Health Issue</Link></li>
        <li><Link to="/about">About</Link></li>

      
      </ul>
      
     
      <button onClick={handleCkick}><Link to="/register"><ImSwitch size={20}/></Link></button>
      
    </nav>
    </React.Fragment>
  )
  
}

export default Header