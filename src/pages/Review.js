import React, { useContext, useState } from 'react'
import "./Review.css"
import { IoIosAddCircle } from "react-icons/io";
import { FaPlateWheat } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import ReviewModal from '../UI/ReviewModal';
import ReviewContext from '../context/review-context';



const Review = () => {
  const reviewCtx = useContext(ReviewContext)

    const data = reviewCtx.reviewData;
    const [reviewData,setReviewData] =useState(data);
    const[reviewForm,setReviewForm]=useState(false)
    const initialData = reviewData && reviewData[0];
    const [activeReview, setActiveReview] = useState([initialData])
    
   console.log(reviewData)

 

  const handleClick = (productName) => {

   const productReview = reviewData?.filter((item)=>item.productName.toLowerCase() === productName.toLowerCase())
   setActiveReview(productReview)

  }


  


  const openReviewForm=()=>{
    setReviewForm(true);
  }




  return (
    <div className='review-box'>
        
       {!reviewForm &&  
       <div className='review-product' >
           {reviewData?.map((review,index)=>(
      <div className='dot'>
                    <FaPlateWheat  size={20}/>
                  <h3 key={review.id} className='product-name' onClick={()=>handleClick(review.productName)}>{review.productName }</h3>
     
     
      </div>
           ))}
            

        </div>
        }
        {reviewForm && <ReviewModal/>}
        {!reviewForm &&  <div className='total-review-box'>
            <div className='total-review-card'><p>Total reviews : {reviewData.length} </p> <button  onClick={openReviewForm}><IoIosAddCircle size={25}/></button> </div>
            <div className='user-review-card'>
            
                {activeReview && activeReview?.map((review,index)=>(
                    <div className='card'>
                    <div className='user-review'>
                    <p>{review?.productName}</p>
                    <img src={review?.image} className='review-img' alt='review image'/>
                    <p>{review?.reviewText}</p>
                    <div className='review-star'>
                    {[1,2,3,4,5].map((star)=>(
                    <FaStar 
                    className='star' 
                    size={20} 
                    color={star <= review?.rating ? "#fb940c" : "gray"}

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