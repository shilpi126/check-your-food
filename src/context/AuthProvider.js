import React, { useState } from 'react'
import AuthContext from "./auth-context";
import axios from "axios";
import { useNavigate } from 'react-router';

const api = process.env.REACT_APP_AUTH_API_KEY;


function AuthProvider(props) {
const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
const [token,setToken]= useState(localStorage.getItem("token"));
const navigate = useNavigate();
const [uid,setUid] =useState(localStorage.getItem("uid"))

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
  setUid("")
  localStorage.removeItem("uid")
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
 const uid = res.data.localId;

  setToken(userToken)
  localStorage.setItem("token",userToken)
  localStorage.setItem("uid",uid)
  setUid(uid)

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

  returnSecureToken:true,

});
 const user = res.data;
 console.log(user)

 if(user){
 const obj={
    displayName:user.displayName,
  photoUrl:user.photoUrl,
  email:user.email
 }
 setUserData(obj);
 }



  
}catch(err){
    console.log(err);
}
    
}


const getUserProfileData = async() =>{
    
    try{
const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${api}`,{

  idToken:token,
  

});


 const users = res?.data?.users;
 if(users && users.length > 0){
  const user = users[0];
 console.log(user);
 setUserData(user);
 localStorage.setItem("userData",JSON.stringify(user))
  
 }

  
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
    navigate("/reset-password");
      
    }catch(err){
        console.log(err);
    }
  }


const resetPassword = async(data) =>{
    
    try{
    const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=${api}`,{
    oobCode: data.oobCode,
    newPassword:data.password,

}

);

 const response = res.data;

 console.log(response);
  navigate("/login")
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



