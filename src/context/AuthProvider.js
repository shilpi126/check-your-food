import React, { useState } from 'react'
import AuthContext from "./auth-context";
import axios from "axios";

const api = process.env.REACT_APP_AUTH_API_KEY;


function AuthProvider(props) {
const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
const [token,setToken]= useState(localStorage.getItem("token"));





const register = async(data) => {
  //console.log(data)

try{

const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`,{
  email:data.email,
  password:data.password,
  returnSecureToken:true,

});

 const response = res.data;


 //console.log(response);
  
}catch(err){
    console.log(err);
}


}



const logout = () =>{
  localStorage.removeItem("token");
  setToken("");
  localStorage.removeItem("userData");
  setUserData(null)
}



const login = async(data) =>{
    
    try{
const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api}`,{
  email:data.email,
  password:data.password,
  returnSecureToken:true,

});
 const userToken = res.data.idToken;

 setToken(userToken)
  localStorage.setItem("token",userToken)
 console.log(userToken);
  
}catch(err){
    console.log(err);
}
    
}



const updateProfile = async(data) =>{
    
    try{
const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${api}`,{
  displayName:data.username,
  photoUrl:data.imageUrl,
  idToken:token,
  deleteAttribute:"DISPLAY_NAME",
  returnSecureToken:true,

});
 const user = res.data;
 const obj={
    displayName:data.username,
  photoUrl:data.imageUrl,
 }
 setUserData(obj);


  
}catch(err){
    console.log(err);
}
    
}


const getUserProfileData = async() =>{
    
    try{
const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${api}`,{

  idToken:token,
  

});
 const user = res.data.users;
 console.log(user[0]);
 setUserData(user[0]);
 localStorage.setItem("userData",JSON.stringify(user[0]))
  
  
}catch(err){
    console.log(err);
}
    
}





    const forgetPassword = async(data) =>{
        
        try{
    const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${api}`,{
          requestType:"PASSWORD_RESET",
          email:data.email,
        }

    )

    const response = res.data;

    console.log(response);
      
    }catch(err){
        console.log(err);
    }
    }


const resetPassword = async() =>{
    
    try{
const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=${api}`,{
    oobCode: "",

});

 const response = res.data;

 console.log(response);
  
}catch(err){
    console.log(err);
}
}






const authValue = {
    login,
    token,
    register,
    logout,
    updateProfile,
    getUserProfileData,
    userData,
    forgetPassword,
    resetPassword,
}

  return (
    <AuthContext.Provider  value={authValue}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider



