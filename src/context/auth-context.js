import { createContext } from "react";

const AuthContext = createContext({
    token:"",
    login:(data)=>{},
    register:(data)=>{},
    logout:()=>{},

})

export default AuthContext;