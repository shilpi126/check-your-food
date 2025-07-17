import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import ReviewProvider from './context/ReviewProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <BrowserRouter>
     <AuthProvider>
      <ReviewProvider>
          <App />
      </ReviewProvider>
     
     </AuthProvider>
   
    </BrowserRouter>
 
    
);


