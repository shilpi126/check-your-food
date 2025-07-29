import React, { useContext, useState } from 'react'
import "./Profile.css"
import { CiLock } from "react-icons/ci";
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import { Label } from '../../UI/Label';
import AuthContext from '../../context/auth-context';
import axios from 'axios';


const Profile = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [waitForUpload,setWaitForUpload] =useState("")
  const [username, setUserName]=useState("");
  const authCtx = useContext(AuthContext);
 const [error, setError]=useState({})
  const profileData = props.user;

  
    const validateUsername = () => {
      if(username.trim().length === 0){
        setError((prevErrors) => ({...prevErrors, username:"Enter Username"}))
        return false;
      }else{
              setError((prevErrors) => ({...prevErrors, username: null}))
              return true;
      }
    }

    
      const validateUrl = () => {
      if(imageUrl.trim() === ""){
        setError((prevErrors) => ({...prevErrors, imageUrl:"Enter valid url."}))
        return false;
      }else{
        setError((prevErrors) => ({...prevErrors, imageUrl: null}))
        return true;
      }
    }



      const uploadFileData = async(file) => {
    
    const formData = new FormData();
    formData.append("file",file);
    formData.append("cloud_name","deb3zjo1c");
    formData.append("upload_preset","review_image")



    const response = await axios.post("https://api.cloudinary.com/v1_1/deb3zjo1c/image/upload",formData);
    const data = await response.data;
    return data.secure_url;
  }


  const handleImageUpload = async(e) => {
   try{
    setWaitForUpload(true)
 const file = e.target.files[0];
      if(!file)return;


      if(file){
      
        //console.log(file )
        const imageUrl =  await uploadFileData(file);
        if(!imageUrl){
          console.log("wait")
        }else{
        console.log(imageUrl)
        setImageUrl(imageUrl);
        }
        
        }
   }catch(err){
 console.log(err)
   }
      setWaitForUpload(false)
      }
  
  
  
    const isFormValidate = () =>{
      
      const isUrlValid = validateUrl();
      const isUsernameValid = validateUsername();
    
      if(isUrlValid && isUsernameValid){
        return true;
      }else{
        return false;
      }
      
    }
  

  

  const handleFormSubmit =(e) =>{
      e.preventDefault()
     if(isFormValidate()){
       const userData = {
        username,
        imageUrl,
      }
     //console.log(userData)
    authCtx.updateProfile(userData);
     }else{
      console.log("evter valid data!")
     }

      
      setUserName("")
      document.getElementById("imageUrl").value=null

  }


  return (
    <div  className='bg-boxx'>
      <h2 className='titlee'>Profile Form</h2>
      <div style={{height:"2rem",marginBottom:"1rem"}}> {waitForUpload && <p style={{color:"orange"}}>profile image is uploading...</p>}
          </div>
      <div className='main'>
<div className='form-containerr'>
<div className='profile-card'>

    {!profileData && <div><img src="https://www.bing.com/th/id/OIP.7O4_GREtLbxqPdJCTmfatQHaHa?w=196&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"  className='profile-pic' alt='profile-image'/>
    <p className='profile-email'>updated profile</p>
    </div>

    }
        

      {profileData && <div>
      <img src={profileData.photoUrl} className='profile-pic' alt='profile-image'/>
        <p className='profile-email'>Name : {profileData.displayName ? profileData.displayName : "update profile"}</p>
        <p className='profile-email'>Email : {profileData.email ? profileData?.email : "update profile"}</p>
    </div>
    }




          
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
              {error.username && <p className='error'>{error.username}</p>}
            </div>
          
            <div>
              
              <Label
              htmlFor="imageUrl"
              text="Photo Url:"
              className="custom-labell"
              />
              <Input
              type='file'
              id='imageUrl'
              //value={imageUrl}
              onChange={handleImageUpload}
              placeholder='Enter Photo Url...'
              required
              className="custom-inputt"
              />
              {error.imageUrl && <p className='error'>{error.imageUrl}</p>}
            </div>

            {waitForUpload && 
            <button 
            type='submit'
            className='custom-buttonn'
            disabled
            style={{backgroundColor:"gray"}}
            >Update Profile</button>}

           {!waitForUpload && 
            <Button 
            type='submit'
            className='custom-buttonn'
            text="Update Profile"
            />}
        
          </form>
        </div>
        
       </div>
      
    </div>
  )
}

export default Profile