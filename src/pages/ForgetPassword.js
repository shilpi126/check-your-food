
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



  const handleFormSubmit =(e) =>{
      e.preventDefault()
      const userData = {
        email,
        
      }
      
      authCtx.forgetPassword(userData);
      

  }




  return (
    <div  className='bg-box'>
      <h2 className='title'>ForgetPassword Form</h2>

        <div className='form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            
            <div>
              
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
              className="custom-input"
              />
            </div>

        

            <Button 
            type='submit'
            className='custom-button'
            text="Submit"
            />
            <p className='p-link-text'>Remember Password ? <Link to="/login">Login</Link></p>
          </form>
           
        </div>
      
    </div>
  )
}

export default ForgetPassword