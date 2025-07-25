import { createContext } from "react";

const AuthContext = createContext({
    token:"",
    uid:"",
    login:(data)=>{},
    register:(data)=>{},
    logout:()=>{},
    verifyEmail:(token)=>{},
    confirmVerifyEmail:(data)=>{},
    updateProfile:(data)=>{},
    getUserProfileData:()=>{},
    userData:{},
    forgetPassword:(data)=>{},
    resetPassword:(data)=>{},
  

})

export default AuthContext;