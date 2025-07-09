import React, { useState } from 'react'
import AuthContext from "./auth-context";
import axios from "axios";
const api = process.env.REACT_APP_AUTH_API_KEY;


function AuthProvider(props) {

const [token,setToken]= useState(localStorage.getItem("token"));

console.log(api)

const login = async(data) =>{
    
    try{
const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`,{
  email:data.email,
  password:data.password,
  returnSecureToken:true,

});
 const response = res.data.idToken;
 setToken(response)
  localStorage.setItem("token",response)
 console.log(response);
  
}catch(err){
    console.log(err);
}
    
}


const register = async(data) => {
  console.log(data)

try{

const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`,{
  email:data.email,
  password:data.password,
  returnSecureToken:true,

});

 const response = res.data;


 console.log(response);
  
}catch(err){
    console.log(err);
}


}


const logout = () =>{
  localStorage.removeItem("token");
  setToken("");
}






const authValue = {
    login,
    token,
    register,
    logout,
}

  return (
    <AuthContext.Provider  value={authValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider



