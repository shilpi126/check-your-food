import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Register from './pages/Register';
import Home from './pages/Home';
import {Route,Routes} from "react-router-dom"
import AuthContext from './context/auth-context';
import Login from './pages/Login';
import Profile from './pages/profile/Profile';
import ForgetPassword from './pages/ForgetPassword';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ResetPassword from './pages/ResetPassword';
import HealthIssue from './pages/HealthIssue';
import Review from './pages/Review';


function App() {
const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.token;
  const user= authCtx.userData;



  useEffect(()=>{
    authCtx.getUserProfileData();
  },[])




  return (
    
    <React.Fragment>
    {isLoggedIn &&  <Header/>}
      <Routes>
      <Route path='/' element={<PrivateRoute><Home/></PrivateRoute> } />
      <Route path='/food' element={<PrivateRoute><Ingredients/></PrivateRoute>}/>
      <Route path='/review' element={<PrivateRoute><Review/></PrivateRoute>}/>
      <Route path='/health-issues' element={<PrivateRoute><HealthIssue/></PrivateRoute>}/>
      <Route path='/user-profile' element={<PrivateRoute><Profile user={user}/></PrivateRoute>}/>


      
      <Route path='/login' element={<PublicRoute><Login/></PublicRoute>  }/>
      <Route path='/forget-password' element={<PublicRoute><ForgetPassword/></PublicRoute>}/>
      <Route path='/reset-password' element={<PublicRoute><ResetPassword/></PublicRoute>}/>
      <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/> 
      
      </Routes>
      </React.Fragment>

      );
}

export default App;
