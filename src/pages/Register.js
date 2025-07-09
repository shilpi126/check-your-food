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

  const handleFormSubmit =(e) =>{
      e.preventDefault()
      const userData = {
        username,
        email,
        password,

      }


      console.log(userData)

      authCtx.register(userData);
      

  }


  return (
    <div  className='bg-box'>
      <h2 className='title'>Register Form</h2>

        <div className='form-container'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            <div>
              
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
              required
              className="custom-input"
              
              />
            </div>
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

            <Button 
            type='submit'
            className='custom-button'
            text="Submit"
            />
            <p>Already Have Account ? <Link to="/login">Login</Link></p>
          </form>
        </div>
      
    </div>
  )
}

export default Register