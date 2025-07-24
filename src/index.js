import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import ReviewProvider from './context/ReviewProvider';
import IngredientsProvider from './context/IngredientsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <BrowserRouter>
     <AuthProvider>
      <ReviewProvider>
        <IngredientsProvider>
          <App />
          </IngredientsProvider>
      </ReviewProvider>
     
     </AuthProvider>
   
    </BrowserRouter>
 
    
);


