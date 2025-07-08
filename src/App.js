
import React from 'react';
import Header from './components/Header';
import Ingredients from './components/Ingredients';

import Register from './pages/Register';
import Home from './pages/Home';

import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from './components/Footer';


function App() {


  return (
    <BrowserRouter>
    <div>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/food' element={<Ingredients/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
