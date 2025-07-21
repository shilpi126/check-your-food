import React, { useContext, useState } from 'react'
import "./Register.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';
import AuthContext from '../context/auth-context';
import { Link } from 'react-router-dom';

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail]=useState("");
  const [username, setUserName]=useState("");
  const authCtx = useContext(AuthContext);

  const [error, setError]=useState({})
  const validateUsername = () => {
    if(username.trim().length === 0){
      setError((prevErrors) => ({...prevErrors, username:"Enter Username"}))
      return false;
    }else{
            setError((prevErrors) => ({...prevErrors, username: null}))
            return true;
    }
  }

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
    const isUsernameValid =validateUsername();
    

    if(isUsernameValid && isEmailValid && isPasswordValid){
      return true;
    }else{
      return false;
    }
  }
  

  const handleFormSubmit =(e) =>{
      e.preventDefault();
    if(isFormValidate()){
        
      const userData = {
        username,
        email,
        password,

      }


      //console.log(userData)

      authCtx.register(userData);
    }else{
      console.log("please enter valid data!")
    }
  
      setEmail("")
      setPassword("")
      setUserName("")

  }


  return (
    <div  className='register-bg-box'>
      <h2 className='title'>Register Form</h2>
        
        <div className='form-container'>
          <h1 className='lock'><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            <div className='input-card'>
              
              <Label
              htmlFor="username"
              text="Username :"
              className="custom-label"
              />
                <Input
              type='text'
              id='username'
              value={username}
              onChange={(e)=>{setUserName(e.target.value)}}
              placeholder='Enter name...'
              //required
              className="register-custom-input"
              
              />
              {error.username && <p className='error'>{error.username}</p>}
      
            </div>
            <div className='input-card'>
              
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
              //required
              className="register-custom-input"
              />
              {error.email && <p className='error'>{error.email}</p>}
      
            </div>
            <div className='input-card'>
              
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
              //required
              className="register-custom-input"
              />
              {error.password && <p className='error'>{error.password}</p>}
      
            </div>

            <Button 
            type='submit'
            className='register-custom-button'
            text="Submit"
            />
            <p>Already Have Account ? <Link to="/login">Login</Link></p>
          </form>
        </div>
      
    </div>
  )
}

export default Register