
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

  const handleFormSubmit =(e) =>{
      e.preventDefault()
      const userData = {
        
        email,
        password,

      }
      
      console.log(userData)

      authCtx.login(userData);

      

  }


  return (
    <div  className='bg-box'>
      <h2 className='title'>Login Form</h2>

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
            <p>Don't Have Account ? <Link to="/register">Sign up</Link></p>
            <Button 
            type='submit'
            className='custom-button'
            text="Submit"
            />
            <p>Don't Have Account ? <Link to="/register">Sign up</Link></p>
          </form>
        </div>
      
    </div>
  )
}

export default Login