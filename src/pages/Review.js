  import React, { useContext, useEffect, useState } from 'react'
  import "./Review.css"
  import { IoIosAddCircle } from "react-icons/io";
  import { FaPlateWheat } from "react-icons/fa6";
  
  import { MdEdit } from "react-icons/md";
  import { FaStar } from "react-icons/fa";
  import ReviewModal from '../UI/ReviewModal';
  import ReviewContext from '../context/review-context';
import Loading from '../components/Loading';
import { RxCross2 } from "react-icons/rx";
import { BiFoodTag } from "react-icons/bi";
import { LuArrowRight } from "react-icons/lu";
import EditReviewModal from '../UI/EditReviewModal';



  const Review = () => {
    const uid =localStorage.getItem("uid")
    const reviewCtx = useContext(ReviewContext)
    const loading = reviewCtx.loading;
    const uniqueTitles = reviewCtx.uniqueTitles;
    let reviewData = reviewCtx.reviewData;
    const activeReview = reviewCtx.activeReview;
    const[reviewForm,setReviewForm]=useState(false)
    const[isEditReview, setIsEditReview]=useState(false)
    const [editData, setEditData] =useState(null)
    
      
    
    const handleClick = (productName) => {
    
      reviewCtx.filterProductReview(productName)
      

    }

    useEffect(()=>{
      if(uniqueTitles && uniqueTitles.length > 0){
        handleClick(uniqueTitles[0]);
      }
    },[uniqueTitles])




const handleEdit = (item) => {
  setEditData(item)
  setIsEditReview(true)
}

const handleDelete = (id) =>{
  reviewCtx.deleteReview(id)
  


}



    const openReviewForm=()=>{
      setReviewForm(true);
    }

    return (
      <>
      <div className='total-review-card'><p>Total Reviews : {reviewData.length} </p> <button  onClick={openReviewForm}><IoIosAddCircle size={25}/></button> </div>
      {isEditReview && <EditReviewModal editdata={editData} onClose={(e)=>{setIsEditReview(false)}}/>}
        {reviewForm && <ReviewModal onClose={(e)=>{setReviewForm(false)}}/>}
        
      {loading &&<div className='spin'> <Loading /></div>}

          {!reviewForm && !loading &&

          <div className='review-box'>
            
            <div className='review-product' >
                
                {uniqueTitles && uniqueTitles.map((productName,index)=>(
            <div className='dot' key={index}>
                <BiFoodTag  size={20}  className='dot-icon'/>
                <h3 key={index} className='product-name' onClick={()=>handleClick(productName)}>{productName}</h3>
            </div>
                ))}
                  

              </div>
              

          {activeReview && 
        

              <div className='user-review-card'>

                
                  {activeReview?.map((review,index)=>(
                    
                    <div key={review.id} className='review-container'>
                    <div className='user-info' >
                          <img src={review.user.image} alt='Loding review pic'/>
                          <p>{review.user?.name ? review.user?.name : "user name"}</p>
                      </div>

                      <div className='card' >
                        
                      <div className='user-review'>
                      <p>{review?.productName}</p>
                      <img src={review?.image} className='review-img' alt='pic...'/>

                      <p className='comment'>{review?.reviewText}</p>
                      <div className='review-star'>
                      {[1,2,3,4,5].map((star,i)=>(
                      <FaStar 
                      key={i+1}
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

                          <button onClick={(e)=>{handleEdit(review)}}><MdEdit color='green' size={22}/></button>
                          <button onClick={(e)=>handleDelete(review?.id)}><RxCross2 size={25} color='red'/></button>
                          
                      </div>
  }
                      </div>

                      </div>

                  ))}

                  
              </div>
          }
          
        
      </div>}
      </>
    )
  }

  export default Review