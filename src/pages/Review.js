  import React, { useContext, useEffect, useState } from 'react'
  import "./Review.css"
  import { IoIosAddCircle } from "react-icons/io";

  import { MdEdit } from "react-icons/md";
  import { FaBars, FaStar } from "react-icons/fa";
  import ReviewModal from '../UI/ReviewModal';
  import ReviewContext from '../context/review-context';
import Loading from '../components/Loading';
import { RxCross2 } from "react-icons/rx";
import { BiFoodTag } from "react-icons/bi";

import EditReviewModal from '../UI/EditReviewModal';



  const Review = () => {
    const uid =localStorage.getItem("uid")
    const reviewCtx = useContext(ReviewContext)
    let reviewData = reviewCtx.reviewData;
    const [toggle,setToggle] =useState(false)
    const[reviewForm,setReviewForm]=useState(false)
    const[isEditReview, setIsEditReview]=useState(false)
    const [editData, setEditData] =useState(null)

    const[uniqueTitles,setUniqueTitles] = useState(["all"])
    const [activeReview, setActiveReview] = useState([])




    const findUnique = () =>{
          const lowerCased = [];
        for(let i=0; i<reviewData.length; i++){
          const lower = reviewData[i].productName.toLowerCase().trim();
    
          if(!lowerCased.includes(lower)){
            lowerCased.push(lower);
          }
        }
    
        setUniqueTitles(["all", ...lowerCased])
        }



    useEffect(()=>{
  if(reviewData.length > 0){
    setActiveReview(reviewData)
    findUnique()
    

  }
    },[reviewData])

    
    const filterProductReview = (productName)=>{
     
      if(productName === "all"){
        setActiveReview(reviewData)
      }else{

      
    const productReview = reviewData?.filter((item)=>item.productName.toLowerCase() === productName.toLowerCase())
    setActiveReview(productReview)
      }

      setToggle(false)
    
    }
        
  
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


    const toggleSidebar=()=>{
      setToggle(!toggle);
    }








    return (
      <>
      <div className='total-review-card'>
              <button  onClick={toggleSidebar} className='review-menu'><FaBars size={25}/></button> 
        <p>Total Reviews : {reviewData.length} </p> 
      <button  onClick={openReviewForm}><IoIosAddCircle size={25}/></button> 
      </div>
      {isEditReview && <EditReviewModal editdata={editData} onClose={(e)=>{setIsEditReview(false)}}/>}
      {reviewForm && <ReviewModal onClose={(e)=>{setReviewForm(false)}}/>}
        
      {!reviewData && <div className='spin'> <Loading /></div>}

          {!reviewForm && 

          <div className='review-box'>
            
            {!toggle &&  <div className='review-product' >
              
                {uniqueTitles && uniqueTitles.map((productName,index)=>(
              
                  <div className='dot' key={index}>
                <BiFoodTag  size={20}  className='dot-icon'/>
                  <h3 key={index} className='product-name' onClick={()=>filterProductReview(productName)}>{productName}</h3>
                
                </div>
              
                
                ))}
                  

              </div>}

              {toggle &&  <div className='review-sidebar' >
              
                {uniqueTitles && uniqueTitles.map((productName,index)=>(
              
                  <div className='dot' key={index}>
                <BiFoodTag  size={20}  className='dot-icon'/>
                  <h3 key={index} className='product-name' onClick={()=>filterProductReview(productName)}>{productName}</h3>
                
                </div>
              
                
                ))}
                  

              </div>}
              

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
                      <p style={{fontWeight:"normal"}}>{review?.productName}</p>
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