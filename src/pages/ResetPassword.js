
import React, { useContext, useState } from 'react'
import "./ResetPassword.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';
import AuthContext from '../context/auth-context';
import { Link, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [url,setUrl]=useState("");
  
  const authCtx = useContext(AuthContext);
  const [error, setError]=useState({})





   
    const validatePassword = () => {
      if(password.trim().length <= 6){
        setError((prevErrors) => ({...prevErrors, password:"Password must be longer than 6 characters."}))
        return false;
      }else{
              setError((prevErrors) => ({...prevErrors, password: null}))
              return true;
      }
    }


      const validateUrl = () => {
      if(url.trim().length === 0){
        setError((prevErrors) => ({...prevErrors, url:"Enter valid url."}))
        return false;
      }else{
              setError((prevErrors) => ({...prevErrors, url: null}))
              return true;
      }
    }
  
  
    const isFormValidate = () =>{
      const isUrlValid = validateUrl();
      const isPasswordValid = validatePassword();
    
      
  
      if(isUrlValid && isPasswordValid){
        return true;
      }else{
        return false;
      }
    }


      const handleFormSubmit =(e) =>{
      e.preventDefault()

     if(isFormValidate()){
       const param = new URL(url).searchParams;
      const oobCode =  param.get("oobCode");

      const userData = {
        oobCode,
        password
      }

      authCtx.resetPassword(userData);
     }else{
      console.log("enter valid data!")
     }
      
  }
    

  return (
    <div  className='reset-bg-box'>
      <h2 className='title'>Reset Password Form</h2>
      <p className='reset-msg'>Enter url that sent to user's email for reset password.</p>
        <div className='reset-form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            
            <div className='reset-input-card'>
              
              <Label
              htmlFor="url"
              text="Url :"
              className="custom-label"
              />
              <Input
              type='url'
              id='url'
              value={url}
              onChange={(e)=>{setUrl(e.target.value)}}
              placeholder='Enter url...'
              required
              className="reset-custom-input"
              />
              {error.url && <p className='error'>{error.url}</p>}
            </div>

            <div  className='reset-input-card'>
              
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
              className="reset-custom-input"
              />
                {error.password && <p className='error'>{error.password}</p>}
            </div>

            <Button 
            type='submit'
            className='reset-custom-button'
            text="Submit"
            />

            <p className='p-link-text'>Remember Password ? <Link to="/login">Login</Link></p>
          </form>
            
        </div>
      
    </div>
  )
}

export default ResetPassword