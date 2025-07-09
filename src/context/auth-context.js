import { createContext } from "react";

const AuthContext = createContext({
    token:"",
    login:(token)=>{},
})

export default AuthContext;