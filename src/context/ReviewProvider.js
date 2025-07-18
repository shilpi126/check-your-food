import React, { useContext, useEffect, useState } from 'react'
import ReviewContext from './review-context'
import axios from 'axios';

const api_key = "https://smart-foodie-app-default-rtdb.firebaseio.com"
const uid =localStorage.getItem("uid")


const ReviewProvider = ({children}) => {
  const initialData = JSON.parse(localStorage.getItem("pdata"))
   const [loading,setLoading]=useState(true)
   const[uniqueTitles,setUniqueTitles] = useState([])
const [reviewData,setReviewData]= useState([]);

    const [activeReview, setActiveReview] = useState([initialData[0]])

    useEffect(()=>{
      readReview()
    },[])



    const filterProductReview = (productName)=>{
    const productReview = reviewData?.filter((item)=>item.productName.toLowerCase() === productName.toLowerCase())
    setActiveReview(productReview)
    
    }
    

  const findUnique = () =>{
      const lowerCased = [];
    for(let i=0; i<reviewData.length; i++){
      const lower = reviewData[i].productName.toLowerCase().trim();

      if(!lowerCased.includes(lower)){
        lowerCased.push(lower);
      }
    }

    setUniqueTitles(lowerCased)
    }


    useEffect(()=>{
      if(reviewData.length > 0){
        
        findUnique()
        setLoading(false)
      
      }
      
    },[reviewData])


    const createReview  = async(data) =>{

      console.log(data)
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
  // const id = data.id;
  
}

const deleteReview  = async(id) =>{
  // console.log(id)
    try{
    const res = await axios.delete(`${api_key}/review/${id}.json`
);
    const response = res.data;
    console.log(response)

  let filterData = reviewData.filter((item)=>item.id !== id)
    console.log(filterData)
    setReviewData(filterData)

    setActiveReview((prev)=>prev.filter((item)=>item.id !== id))
    
    findUnique()
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
    loading,
    uniqueTitles,
    activeReview,
    filterProductReview,
    }

  return (
    <ReviewContext value={reviewValue}>{children}</ReviewContext >
  )
}

export default ReviewProvider