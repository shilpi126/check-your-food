
import { useState } from 'react';
import Header from './components/Header';
import Ingredients from './components/Ingredients';

import Register from './pages/Register';
import Home from './pages/Home';

import {BrowserRouter,Router,Route,Routes} from "react-router-dom"


function App() {


  return (
    <BrowserRouter>
    <div>
      {/* <Register/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/food' element={<Ingredients/>}/>
        
      
  
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
