import React, { useState } from 'react'
import "./Review.css"
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import ReviewForm from '../components/ReviewForm';

 const reviews=[
    {
      id: 1,
      productName: 'Maggi Noodles',
      reviewText: 'Tastes good but has too much oil.',
      image: 'https://wallpaperaccess.com/full/767054.jpg',
      rating: 3,
    },
    {
      id: 2,
      productName: 'Lay’s Chips',
      reviewText: 'Too salty, not very healthy.',
      image: 'https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?w=312&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      rating: 2,
    }
  ];

const Review = () => {
     const[reviewForm,setReviewForm]=useState(false)
    const [activeReview, setActiveReview] = useState([reviews[0]])

 

  const handleClick = (productName) => {

   const productReview = reviews.filter((item)=>item.productName === productName)
   
   setActiveReview(productReview)

  }


  const openReviewForm=()=>{
    setReviewForm(true);
  }




  return (
    <div className='review-box'>
       
        <div className='review-product'>
           {reviews.map((review,index)=>(
             <h3 className='product-name' onClick={()=>handleClick(review.productName)}>{review.productName}</h3>
           ))}
            

        </div>
         {reviewForm && <ReviewForm/>}
        {!reviewForm &&  <div className='total-review-box'>
            <div className='total-review-card'><p>Total reviews : {reviews.length} </p> <button  onClick={openReviewForm}><IoIosAddCircle size={25}/></button> </div>
            <div className='user-review-card'>
            
                {activeReview.map((reviews,index)=>(
                    <div className='card'>
                    <div className='user-review'>
                    <p>{reviews.productName}</p>
                    <img src={reviews.image} className='review-img' alt='review image'/>
                    <p>{reviews.reviewText}</p>
                    <div className='review-star'>
                    {[1,2,3,4,5].map((star)=>(
                    <FaStar 
                    className='star' 
                    size={20} 
                    color={star <= reviews.rating ? "#fb940c" : "gray"}

                    />
                    )
                    )}
                    </div>
                    </div>
                    <div className='review-btn-box'>

                        <button><MdEdit size={25}/></button>
                        <button><MdDeleteForever size={25}/></button>
                        
                    </div>
                    </div>

                ))}

                
            </div>
        </div>}
       
    </div>
  )
}

export default Review