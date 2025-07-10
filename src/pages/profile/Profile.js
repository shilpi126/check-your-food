import React, { useContext, useState } from 'react'
import "./Profile.css"
import { CiLock } from "react-icons/ci";
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import { Label } from '../../UI/Label';
import AuthContext from '../../context/auth-context';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  
  const [username, setUserName]=useState("");
  const authCtx = useContext(AuthContext);

  const profileData = props.user;



  

  const handleFormSubmit =(e) =>{
      e.preventDefault()
      const userData = {
        username,
        imageUrl,
        

      }

      authCtx.updateProfile(userData);
      

  }


  return (
    <div  className='bg-boxx'>
      <h2 className='titlee'>Profile Form</h2>
       <div className='main'>
<div className='form-containerr'>
   <div className='profile-card'>

{!profileData && <img src="https://www.bing.com/th/id/OIP.7O4_GREtLbxqPdJCTmfatQHaHa?w=196&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"  className='profile-pic'/>}
{!profileData && <p className='profile-email'>"updated profile"</p>}
          

  {profileData && <img src={profileData.photoUrl} className='profile-pic'/>}
{profileData && <p className='profile-email'>Email : {profileData.email ? profileData.email :"updated profile"}</p>}
          
   </div>
        </div>
          <div className='form-containerr'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            <div>
              
              <Label
              htmlFor="username"
              text="Username :"
              className="custom-labell"
              />
                <Input
              type='text'
              id='username'
              value={username}
              onChange={(e)=>{setUserName(e.target.value)}}
              placeholder='Enter name...'
              required
              className="custom-inputt"
              
              />
            </div>
          
            <div>
              
              <Label
              htmlFor="imageUrl"
              text="Photo Url:"
              className="custom-labell"
              />
              <Input
              type='url'
              id='imageUrl'
              value={imageUrl}
              onChange={(e)=>{setImageUrl(e.target.value)}}
              placeholder='Enter Photo Url...'
              required
              className="custom-inputt"
              />
            </div>

            <Button 
            type='submit'
            className='custom-buttonn'
            text="Update Profile"
            />
        
          </form>
        </div>
        
       </div>
      
    </div>
  )
}

export default Profile