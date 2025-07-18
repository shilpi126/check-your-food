  import React, { useContext, useEffect, useState } from 'react'
  import "./Review.css"
  import { IoIosAddCircle } from "react-icons/io";
  import { FaPlateWheat } from "react-icons/fa6";
  import { MdDeleteForever } from "react-icons/md";
  import { MdEdit } from "react-icons/md";
  import { FaStar } from "react-icons/fa";
  import ReviewModal from '../UI/ReviewModal';
  import ReviewContext from '../context/review-context';
import Loading from '../components/Loading';



  const Review = () => {
    const uid =localStorage.getItem("uid")
    const reviewCtx = useContext(ReviewContext)
    const loading = reviewCtx.loading;
    const uniqueTitles = reviewCtx.uniqueTitles;
    let reviewData = reviewCtx.reviewData;
    const activeReview = reviewCtx.activeReview;
    const[reviewForm,setReviewForm]=useState(false)

    console.log(reviewData)
      
    
    const handleClick = (productName) => {
    
      reviewCtx.filterProductReview(productName)
      console.log(activeReview)

    }




const handleEdit = (item) => {
  reviewCtx.updateReview(item)
}

const handleDelete = (id) =>{
  reviewCtx.deleteReview(id)
  


}



    const openReviewForm=()=>{
      setReviewForm(true);
    }

    return (
      <>
      <div className='total-review-card'><p>Total reviews : {reviewData.length} </p> <button  onClick={openReviewForm}><IoIosAddCircle size={25}/></button> </div>
        {reviewForm && <ReviewModal onClose={(e)=>{setReviewForm(false)}}/>}
        
{loading &&<div className='spin'> <Loading /></div>}
    {!reviewForm && !loading &&

    <div className='review-box'>
            
            <div className='review-product' >
                
                {uniqueTitles && uniqueTitles.map((productName,index)=>(
            <div className='dot' key={index}>
                <FaPlateWheat  size={20}/>
                <h3 key={index} className='product-name' onClick={()=>handleClick(productName)}>{productName}</h3>
            </div>
                ))}
                  

              </div>
              

          {activeReview && 
          <div className='total-review-box'>

              <div className='user-review-card'>

                  {!activeReview && <p style={{color:"black"}}>Data no found!</p>}
                  {activeReview?.map((review,index)=>(
                 
                   <>
                    <div className='user-info'>
                          <img src={review.user.image}/>
                          <p>{review.user.name}</p>
                      </div>
                      <div className='card' key={review?.id}>
                        
                      <div className='user-review'>
                      <p>{review?.productName}</p>
                      <img src={review?.image} className='review-img' alt='pic...'/>
                      <p className='comment'>{review?.reviewText}</p>
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

                      {review.user.uid === uid && 
                      <div className='review-btn-box'>

                          <button onClick={(e)=>handleEdit(review)}><MdEdit size={25}/></button>
                          <button onClick={(e)=>handleDelete(review?.id)}><MdDeleteForever size={25}/></button>
                          
                      </div>
  }
                      </div></>

                  ))}

                  
              </div>
          </div>}
          
        
      </div>}
      </>
    )
  }

  export default Review