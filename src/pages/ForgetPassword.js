
import React, { useContext, useState } from 'react'
import "./ForgetPassword.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';
import AuthContext from '../context/auth-context';
import { Link,} from 'react-router-dom';

const ForgetPassword = () => {
 
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


      const isFormValidate = () =>{
      const isEmailValid = validateEmail();
      
      if(isEmailValid ){
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
        
      }
      
      authCtx.forgetPassword(userData);
    }else{
      console.log("enter valid data")
    }
      
    setEmail("");

  }




  return (
    <div  className='forget-bg-box'>
      <h2 className='title'>Forget Password Form</h2>

        <div className='forget-form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            
            <div className='forget-input-card'>
              
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
              className="forget-custom-input"
              />
                              {error.email && <p className='error'>{error.email}</p>}
            </div>

        

            <Button 
            type='submit'
            className='forget-custom-button'
            text="Submit"
            />
            <p className='p-link-text'>Remember Password ? <Link to="/login">Login</Link></p>
          </form>
           
        </div>
      
    </div>
  )
}

export default ForgetPassword