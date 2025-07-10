
import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import Ingredients from './components/Ingredients';

import Register from './pages/Register';
import Home from './pages/Home';

import {Navigate, Route,Routes} from "react-router-dom"
import Footer from './components/Footer';
import AuthContext from './context/auth-context';
import Login from './pages/Login';

import Profile from './pages/profile/Profile';
import ForgetPassword from './pages/ForgetPassword';


function App() {
const authCtx = useContext(AuthContext);
 const isLoggedIn = authCtx.token;

 const user= authCtx.userData;



 useEffect(()=>{
  authCtx.getUserProfileData();
 },[])






  return (
    
    <div>
    {isLoggedIn &&  <Header/>}
      <Routes>
      
      {isLoggedIn &&
      <Route path='/' element={<Home/>}/>
}


      {isLoggedIn &&
      <Route path='/user-profile' element={<Profile user={user}/>}/>
}



      {!isLoggedIn &&
      <Route path='/forget-password' element={<ForgetPassword/>}/>
}
      



{isLoggedIn &&
      <Route path='/food' element={<Ingredients/>}/>
}
    
      <Route path='/login' element={!isLoggedIn ? <Login/>  : <Navigate to="/" />}/>
      {!isLoggedIn && <Route path='/register' element={<Register/>}/> }
      

      </Routes>
        
    </div>
    
  );
}

export default App;
