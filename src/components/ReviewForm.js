import React, { useContext, useEffect, useState } from 'react'
import "./ReviewForm.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';

import ReviewContext from '../context/review-context';
import AuthContext from '../context/auth-context';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';

const ReviewForm = (props) => {

  const authCtx = useContext(AuthContext)
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText]=useState("");
  const [productName, setProductName]=useState("");
  const [photo, setPhoto]=useState("")
  const [waitForUpload, setWaitForUpload] = useState(false)
  const reviewCtx = useContext(ReviewContext);
  const userData = authCtx.userData;
  const [user,setUser]=useState({
    name:"update profile",
    image:"https://th.bing.com/th?q=User+Account+Icon&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    uid:authCtx.uid,
  })


  useEffect(()=>{
    if(userData){
    const data = {
    name:userData.displayName,
    
    image:userData.photoUrl,
    uid:authCtx.uid,
  }

  setUser(data)
    }
  },[userData])



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
        setPhoto(imageUrl);
        }
        
        }
   }catch(err){
 console.log(err)
   }
      setWaitForUpload(false)
      }
  


  const handleFormSubmit =async(e) =>{
      e.preventDefault()
      try{

      const productData = {
        reviewText,
        rating,
        productName,
        photo,
        user,
      }
    //console.log(productData)
    reviewCtx.createReview(productData);
      props.onClose(false)
    }catch(err){
    console.log(err)
    }
  }


  

  return (
    <div  className='review-bg-box'>
        <div className='review-form-container'>
        <div className='review-close-btn'> <button  onClick={props.onClose}><IoCloseSharp size={25}/></button>
        </div>
          <h1 >< CiLock/></h1>
          <h2 className='review-title'>Review Form</h2>
          <div className='wait-image-text'>
          {waitForUpload && <p className='wait-image-text'>Please Wait, image is uploading...</p>}
          </div>

          <form onSubmit={handleFormSubmit}>
            <div>
              
              <Label
              htmlFor="productName"
              text="Product Name :"
              className="custom-label"
              />
                <Input
              type='text'
              id='productName'
              value={productName}
              onChange={(e)=>{setProductName(e.target.value)}}
              placeholder='Enter Product Name...'
              required
              className="custom-input"
              
              />
            </div>
            <div>
              
              <Label
              htmlFor="reviewText"
              text="Review :"
              className="custom-label"
              />
              <Input
              type='reviewText'
              id='reviewText'
              value={reviewText}
              onChange={(e)=>{setReviewText(e.target.value)}}
              placeholder='Enter Review...'
              required
              className="custom-input"
              />
            </div>
            <div>
              
              <Label
              htmlFor="photo"
              text="Photo :"
              className="custom-label"
              />
              <Input
              type='file'
              id='photo'
              onChange={handleImageUpload}
              placeholder='Enter photo...'
              required
              className="custom-input"
              />
            </div>
            <div>
              <Label
              htmlFor="rating"
              text="Rating :"
              className="custom-label"
              />
              <select 
              id='rating'
              value={rating}
              required
              onChange={(e)=>setRating(e.target.value)}
              className='custom-input'
              >
                <option value="">Select Rating</option>
                <option value="1">1 </option>
                <option value="2">2 </option>
                <option value="3">3 </option>
                <option value="4">4 </option>
                <option value="5">5 </option>
              </select>
            </div>


            {waitForUpload && <button 
            type='submit'
            className='custom-button'
            
            style={{backgroundColor:"gray"}}
            disabled
            >Submit</button>
            
            }


{!waitForUpload &&   <Button 
            type='submit'
            className='custom-button'
            text="Submit"
            />}
           

          </form>
        </div>
      
    </div>
  )
}


export default ReviewForm