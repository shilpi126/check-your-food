
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Modal from './UI/Modal';


function App() {


  return (
    <div className="App">

      <Header/>
      <Ingredients/>
      
    </div>
  );
}

export default App;
