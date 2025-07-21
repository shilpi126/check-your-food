
import React, { useContext, useState } from 'react'
import "./Login.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';
import AuthContext from '../context/auth-context';
import { Link } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail]=useState("");
  
  const authCtx = useContext(AuthContext);

    const [error, setError]=useState({})
  
  
    const validateEmail = () => {
      if(!email.includes("@")){
        setError((prevErrors) => ({...prevErrors, email:"Invalid Email"}))
        return false;
      }else{
              setError((prevErrors) => ({...prevErrors, email: null}))
              return true;
      }
    }
  
    
    const validatePassword = () => {
      if(password.trim().length <= 6){
        setError((prevErrors) => ({...prevErrors, password:"Password must be longer than 6 characters."}))
        return false;
      }else{
              setError((prevErrors) => ({...prevErrors, password: null}))
              return true;
      }
    }
  
  
    const isFormValidate = () =>{
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
    
      
  
      if(isEmailValid && isPasswordValid){
        return true;
      }else{
        return false;
      }
    }
    

  const handleFormSubmit =(e) =>{
      e.preventDefault()

      if(isFormValidate()){
   const userData = {
        
        email,
        password,

      }
      
      //console.log(userData)
      
      authCtx.login(userData);
      }else{
        console.log("enter valid data!")
      }
      setEmail("")
      setPassword("")
      

  }


  return (
    <div  className='login-bg-box'>
      <h2 className='title'>Login Form</h2>

        <div className='form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            
            <div className='login-input-card'>
              
              <Label
              htmlFor="email"
              text="Email :"
              className="custom-label"
              />
                <Input
              type='email'
              id='email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder='Enter Email...'
              required
               className="login-custom-input"
              />
                {error.email && <p className='error'>{error.email}</p>}
            </div>
            <div className='login-input-card'>
              
              <Label
              htmlFor="password"
              text="Password :"
              className="custom-label"
              />
              <Input
              type='password'
              id='password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder='Enter password...'
              required
              className="login-custom-input"
              />
            {error.password && <p className='error'>{error.password}</p>}
            </div>
            <p className='login-link-text'>Have You Forget Password ? <Link to="/forget-password">Click Here</Link></p>
            <Button 
            type='submit'
            className='login-custom-button'
            text="Submit"
            />
            <p className='p-link-text'>Don't Have Account ? <Link to="/register">Sign up</Link></p>
          </form>
        </div>
      
    </div>
  )
}

export default Login