import React, { useContext } from 'react'
import AuthContext from '../context/auth-context';
import { Navigate } from 'react-router';

const PublicRoute = ({children}) => {
const authCtx = useContext(AuthContext);
 const isLoggedIn = !!authCtx.token;

  return !isLoggedIn ? children : <Navigate to="/" />
  
}

export default PublicRoute