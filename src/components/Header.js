import React, { useContext, useState} from 'react'
import "./Header.css"
import { FaBars, FaHome, FaTimes, FaUser } from "react-icons/fa";

import { ImSwitch } from "react-icons/im";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';

const Header = () => {
  const [openMenu, setOpenMenu]=useState(false);
const navigate = useNavigate();
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


const toggleMenu = () =>{
  setOpenMenu(!openMenu)
}



const handleCkick = () => {
  
    authCtx.logout();
    navigate("/login");

}




  return (
    <React.Fragment>
    <nav className='heading'>
      
      <div className='logo'></div>
    
    {!openMenu &&   
    <ul className='nav-link'>
      <li><Link to="/" >Home</Link></li>
        <li><Link to="/food" >Food</Link></li>
        
        <li><Link to="/history" >History</Link></li>

        <li><Link to="/review" >Review</Link></li>

      
      </ul> }
      {openMenu &&
      <ul  className='nav-link-open'>
        <div className='menu-icon' onClick={toggleMenu}><FaTimes size={30}/></div>
        
      <li><Link to="/" onClick={()=>setOpenMenu(false)}><FaHome/> Home</Link></li>
        <li><Link to="/food" onClick={()=>setOpenMenu(false)}> <FaHome /> Food</Link></li>
        
        <li><Link to="/history" onClick={()=>setOpenMenu(false)}> <FaHome/> History</Link></li>

        <li><Link to="/review" onClick={()=>setOpenMenu(false)}> <FaHome/> Review</Link></li>

      </ul>}
     

      <div className='btn'>    
      <button className='profile' ><Link to="/user-profile"><FaUser size={18}/></Link></button>
      <button className='logout'  onClick={handleCkick}><Link to="/logout"><ImSwitch size={20}/></Link></button>
      <div className='menu-icon-open' onClick={toggleMenu}><FaBars size={20}/></div>
      
      </div>
      </nav>
    </React.Fragment>
  )
  
}

export default Header