import React, { useState } from 'react'
import AuthContext from "./auth-context";


function AuthProvider(props) {
const [token,setToken]= useState(false);

const login = (token) =>{
    setToken(token);
}



const authValue = {
    login,
    token,
}

  return (
    <AuthContext.Provider  value={authValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider