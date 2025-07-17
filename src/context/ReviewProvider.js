import React, { useState } from 'react'
import ReviewContext from './review-context'
import axios from 'axios';
const api_key = "https://smart-foodie-app-default-rtdb.firebaseio.com/review.json"

const ReviewProvider = ({children}) => {
const [reviewData,setReviewData]= useState([]);

    const createReview  = async(data) =>{
          
    try{
    const res = await axios.post(`${api_key}`,data
    );
    const response = res.data.name;
    //console.log(response);
    const product ={
      id:response,
      image:data.photo,
      review:data.review,
      reviewText:data.reviewText,
      productName:data.productName,
      
    }

    setReviewData(product)
      
    }catch(err){
        console.log(err);
    }

    }


    

    const readReview  = async() => {
    try{
        const res = await axios.get(api_key);
        const response = res.data;
        const data=[]
        
        for(let key in response){

          const product={
                id:key,
                image:response[key].photo,
                reviewText:response[key].reviewText,
                rating:response[key].rating,
                productName:response[key].productName,
          }

          data.push(product)
            
            // console.log(product);
        }

        setReviewData(data)
        
          
        }catch(err){
            console.log(err);
        }
    }


  

const updateReview  = (id) =>{

}

const deleteReview  = (id) =>{

}

    const reviewValue = {
    reviewData,
    createReview,
    readReview,
    updateReview,
    deleteReview,
    }

  return (
    <ReviewContext value={reviewValue}>{children}</ReviewContext >
  )
}

export default ReviewProvider