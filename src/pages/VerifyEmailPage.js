
import React, { useContext, useState } from 'react'
import "./VerifyEmailPage.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';
import AuthContext from '../context/auth-context';
import { Link} from 'react-router-dom';

const VerifyEmailPage = () => {
 
  const [url,setUrl]=useState("");
  
  const authCtx = useContext(AuthContext);



  const handleFormSubmit =(e) =>{
      e.preventDefault()

      const param = new URL(url).searchParams;
      const oobCode =  param.get("oobCode");

      const userData = {
        oobCode,
        
      }

      authCtx.confirmVerifyEmail(userData);
      
  }




  return (
    <div  className='verify-bg-box'>
      <h2 className='title'>Verify Email Form</h2>
      <p className='reset-msg'>Enter url that sent to user's email for confirm email verification.</p>
        <div className='verify-form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            
            <div className='verify-div'>
              
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
              className="verify-custom-input"
              />
            </div>

           
            <Button 
            type='submit'
            className='verify-custom-button'
            text="Submit"
            />
            <p className='p-link-text'>Dont want to verify ? <Link to="/login">Login</Link></p>
          </form>
           
        </div>
      
    </div>
  )
}

export default VerifyEmailPage