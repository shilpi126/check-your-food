import React, { useContext} from 'react'
import "./Header.css"
import { FaUser } from "react-icons/fa";

import { ImSwitch } from "react-icons/im";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';

const Header = () => {
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



const handleCkick = () => {
  
    authCtx.logout();
    navigate("/login");

}




  return (
    <React.Fragment>
    <nav className='heading'>
      
      <div className='logo'></div>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/food">Food</Link></li>
        
        <li><Link to="/history">History</Link></li>
        {/* <li><Link to="/health-issues">Health Issue</Link></li> */}
        <li><Link to="/review">Review</Link></li>
        
      </ul>
      <div className='btn'>    
      <button className='profile' ><Link to="/user-profile"><FaUser size={18}/></Link></button>
      <button className='logout'  onClick={handleCkick}><Link to="/logout"><ImSwitch size={20}/></Link></button>
      </div>
      </nav>
    </React.Fragment>
  )
  
}

export default Header