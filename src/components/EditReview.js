import React, { useContext, useEffect, useState } from 'react'
import "./ReviewForm.css"
import { CiLock } from "react-icons/ci";
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Label } from '../UI/Label';

import ReviewContext from '../context/review-context';


const EditReview = (props) => {

  
  const [rating, setRating] = useState(props.editdata.rating);
  const [reviewText, setReviewText]=useState(props.editdata.reviewText);
  const [productName, setProductName]=useState(props.editdata.productName);
  const [photo, setPhoto]=useState(props.editdata.image)
  const reviewCtx = useContext(ReviewContext);



  const handleFormSubmit =(e) =>{
      e.preventDefault()
      //console.log(rating)
      const productData = {
        id:props.editdata.id,
        reviewText,
        rating,
        productName,
        photo,
        user:props.editdata.user,

      }
      
      reviewCtx.updateReview(productData);
      props.onClose(false)

  }


  

  return (
    <div  className='review-bg-box'>
      <h2 className='review-title'>Edit Review </h2>

        <div className='review-form-container'>
        <h1 >< CiLock/></h1>

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
              type='url'
              id='photo'
              onChange={(e)=>setPhoto(e.target.value)}
              value={photo}
              placeholder='Enter photo...'
              required
              className="custom-input"
              />
            </div>

                <div>
              
              <Label
              htmlFor="rating"
              text="Review :"
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

            <Button 
            type='submit'
            className='custom-button'
            text="Submit"
            />

          </form>
        </div>
      
    </div>
  )
}

export default EditReview