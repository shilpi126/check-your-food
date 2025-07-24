import React, { useEffect, useState } from 'react'
import ReviewContext from './review-context'
import axios from 'axios'

const api_key = "https://smart-foodie-app-default-rtdb.firebaseio.com"


const ReviewProvider = ({children}) => {

const [reviewData,setReviewData]= useState([]);


    useEffect(()=>{
      readReview()
    },[])


    const createReview  = async(data) =>{

      //console.log(data)
    try{
    const res = await axios.post(`${api_key}/review/.json`,{
      ...data, 
      
    }
    );
    const response = res.data.name;
    // console.log(response);
    const product ={
      id:response,
      image:data.photo,
      rating:data.rating,
      reviewText:data.reviewText,
      productName:data.productName,
      user:data.user,
      
      
    }

    setReviewData((prev)=>[...prev, product])
      
    }catch(err){
        console.log(err);
    }

    }

    const readReview  = async() => {
    try{
        const res = await axios.get(`${api_key}/review.json`);
        const response = res.data;
        // console.log(response)
        const data=[]
        
        for(let key in response){

          const product={
                id:key,
                image:response[key].photo,
                reviewText:response[key].reviewText,
                rating:response[key].rating,
                productName:response[key].productName,
                user:response[key].user,
          }

          data.push(product)
            
            // console.log(product);
        }

        setReviewData(data)

        localStorage.setItem("pdata",JSON.stringify(data))
        
          
        }catch(err){
            console.log(err);
        }
    }


const updateReview  = async(data) =>{
  const id = data.id;
  try{
    const res = await axios.put(`${api_key}/review/${id}.json`,{
      photo:data.photo,
      rating:data.rating,
      reviewText:data.reviewText,
      productName:data.productName,
      user:data.user,
      
    }
    );
    const response = res.data;
    //console.log(response);
    const product ={
      id:data.id,
      image:data.photo,
      rating:data.rating,
      reviewText:data.reviewText,
      productName:data.productName,
      user:data.user,
      
      
    }

    setReviewData((prev) => 
      prev.map((item)=>(item.id === id ? product : item)))
      
    }catch(err){
        console.log(err);
    }
  
}

const deleteReview  = async(id) =>{
  //console.log(id)
    try{
    const res = await axios.delete(`${api_key}/review/${id}.json`
);
    const response = res.data;
    //console.log(response)

  let filterData = reviewData.filter((item)=>item.id !== id)
    
    setReviewData(filterData)

    
    }catch(err){
        console.log(err);
    }
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