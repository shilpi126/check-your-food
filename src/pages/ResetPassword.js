
import React, { useContext, useState } from 'react'
import "./ForgetPassword.css"
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



  const handleFormSubmit =(e) =>{
      e.preventDefault()

      const param = new URL(url).searchParams;
      const oobCode =  param.get("oobCode");

      const userData = {
        oobCode,
        password
      }

      authCtx.resetPassword(userData);
      
  }




  return (
    <div  className='bg-box'>
      <h2 className='title'>Reset Password Form</h2>
      <p className='reset-msg'>Enter url that sent to user's email for reset password.</p>
        <div className='form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            
            <div>
              
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
              className="custom-input"
              />
            </div>

            <div>
              
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

export default ResetPassword