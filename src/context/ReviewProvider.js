import React, { useState } from 'react'
import ReviewContext from './review-context'
const api_key = "https://smart-foodie-app-default-rtdb.firebaseio.com/review.json"

const ReviewProvider = ({children}) => {
const [review,setReview]= useState([]);

const createReview  = (data) =>{

}

const readReview  = () =>{

}

const updateReview  = (id) =>{

}

const deleteReview  = (id) =>{

}

    const reviewValue = {
    review,
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