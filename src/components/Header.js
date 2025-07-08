import React from 'react'
import "./Header.css"
import logo from "../assets/food_logo.png"
import { ImSwitch } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

window.addEventListener('scroll',()=>{
  const heading = document.querySelector(".heading");
  const scrollY = window.scrollY;

  if(scrollY > 200){
    heading.style.position = "sticky";
  }else{
     heading.style.position = "absolute";
  }

})

  return (
    <React.Fragment>
    <nav className='heading'>
      
      <div className='logo'></div>
      <ul>
        <li><Link to="/food">Food</Link></li>
        
        <li><Link to="/drink">Drinks</Link></li>
        <li><Link to="/health-issues">Health Issue</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
      </ul>
      
      <button><ImSwitch size={20}/></button>
      
    </nav>
    </React.Fragment>
  )
  
}

export default Header