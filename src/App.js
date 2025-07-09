
import React, { useContext } from 'react';
import Header from './components/Header';
import Ingredients from './components/Ingredients';

import Register from './pages/Register';
import Home from './pages/Home';

import {Navigate, Route,Routes} from "react-router-dom"
import Footer from './components/Footer';
import AuthContext from './context/auth-context';


function App() {
const authCtx = useContext(AuthContext);
console.log(authCtx.token);
  return (
    
    <div>
      {!authCtx.token &&  <Header/>}
     
      <Routes>
        {!authCtx.token && <Route path='/' element={<Home/>}/>}
        
        <Route path='/food' element={<Ingredients/>}/>
        <Route path='/register' element={authCtx.token ? <Register/>  : <Navigate to="/" />}/>
      </Routes>
        
    </div>
    
  );
}

export default App;
