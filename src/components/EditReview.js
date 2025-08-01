import React, { useContext, useEffect, useState } from 'react'
import "./ReviewForm.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';

import ReviewContext from '../context/review-context';
import axios from 'axios';
import { IoCloseSharp } from 'react-icons/io5';


const EditReview = (props) => {
console.log(props.editdata)
  const [waitForUpload, setWaitForUpload] = useState(false)
  const [rating, setRating] = useState(props.editdata.rating);
  const [reviewText, setReviewText]=useState(props.editdata.reviewText);
  const [productName, setProductName]=useState(props.editdata.productName);
  const [photo, setPhoto]=useState(props.editdata.image)
  const reviewCtx = useContext(ReviewContext);



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




  const handleFormSubmit =(e) =>{
      e.preventDefault()
    

      const productData = {
        id:props.editdata.id,
        reviewText,
        rating,
        productName,
        photo,
        user:props.editdata.user,

      }
      //console.log(productData)
      reviewCtx.updateReview(productData);
      props.onClose(false)

  }


  

  return (
    <div  className='review-bg-box'>


        <div className='review-form-container'>
             <div className='review-close-btn'> <button  onClick={props.onClose}><IoCloseSharp size={25}/></button>
                  </div>
        <h1 >< CiLock/></h1>
        <h2 className='review-title'>Edit Review </h2>
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
            <div style={{marginBottom:"20px"}}>
              
              <Label
              htmlFor="photo"
              text="Photo :"
              className="custom-label"
              />
            <div style={{display:"flex",justifyContent:"space-between"}}>
              {photo && (
                <div>
                  <img src={photo} alt='review' 
                  style={{width:"100px", height:"30px", objectFit:"cover", }}
                  />
                  
                </div>
              )}
              <input
              type='file'
              id='photo'
              
              onChange={handleImageUpload}
              placeholder='Enter photo...'
              
              className="custom-input"
              />
              </div>
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
            {waitForUpload &&  <button 
            type='submit'
            className='custom-button'
            disabled
            style={{backgroundColor:"gray"}}
            >submit</button>}

           {!waitForUpload &&  <Button 
            type='submit'
            className='custom-button'
            text="Submit"
            />}

          </form>
        </div>
      
    </div>
  )
}

export default EditReview