import React from 'react'
import "./Header.css"
import logo from "../assets/food_logo.png"
import { ImSwitch } from "react-icons/im";

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
        <li>Food</li>
        <li>Drinks</li>
        <li>Health Issue</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
      <button><ImSwitch size={20}/></button>
      
    </nav>
    </React.Fragment>
  )
  
}

export default Header