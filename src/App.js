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
import History from "./pages/History"
import Review from './pages/Review';
import VerifyEmailPage from './pages/VerifyEmailPage';

import FooterPage from './components/FooterPage';
import ReviewContext from './context/review-context';
import IngredientsContext from './context/ingredients-contex';


function App() {
  const ingredientsCtx = useContext(IngredientsContext)
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.token;
  const user= authCtx.userData;
  

    useEffect(()=>{
      ingredientsCtx.getHistoryData()
      
    },[isLoggedIn])


    useEffect(()=>{
    authCtx.getUserProfileData()
    },[isLoggedIn])



  return (
    
    <React.Fragment>
    {isLoggedIn &&  <Header/>}
      <Routes>
      <Route path='/' element={<PrivateRoute><Home/></PrivateRoute> } />
      <Route path='/food' element={<PrivateRoute><Ingredients/></PrivateRoute>}/>
      <Route path='/review' element={<PrivateRoute><Review/></PrivateRoute>}/>
            
      <Route path='/history' element={<PrivateRoute><History/></PrivateRoute>}/>
      <Route path='/user-profile' element={<PrivateRoute><Profile user={user}/></PrivateRoute>}/>
      
      <Route path='/login' element={<PublicRoute><Login/></PublicRoute>  }/>
      <Route path='/forget-password' element={<PublicRoute><ForgetPassword/></PublicRoute>}/>
      <Route path='/reset-password' element={<PublicRoute><ResetPassword/></PublicRoute>}/>
      <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/> 
            
      <Route path='/confirm-verify' element={<PublicRoute><VerifyEmailPage/></PublicRoute>  }/>
      </Routes>
      {isLoggedIn &&  <FooterPage/>}
      </React.Fragment>

      );
}

export default App;
