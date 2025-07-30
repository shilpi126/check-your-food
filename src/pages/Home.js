import React, { useContext, useEffect, useState } from 'react'
import "./Home.css"

import banner from "../assets/food_banner_design.png"

import ReviewContext from '../context/review-context'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
const reviewCtx = useContext(ReviewContext)
const reviewData = reviewCtx.reviewData;

  const[uniqueReviewData,setReviewUniqueData] = useState([])
  



  const findUnique = () =>{
        const uniqueData = [];
        const data=[];
      for(let i=0; i<reviewData.length; i++){
        const lower = reviewData[i].productName.toLowerCase().trim();
        
        if(!uniqueData.includes(lower)){
          uniqueData.push(lower);
          data.push(reviewData[i])

        }
      }
      setReviewUniqueData(data);
      
      }



useEffect(()=>{
if(reviewData.length > 0){
  
  findUnique()
  
}
  },[reviewData])

//console.log(uniqueReviewData)


return (
<div className='home-container'>
  
  <img src={banner} alt='banner'/>


  <div className='section-one'>
  
  <div className='img-card'>
    <img src="https://static.vecteezy.com/system/resources/previews/003/491/479/large_2x/beautiful-girl-posing-with-fruits-free-photo.JPG" alt='random'/>
  </div>
   <div className='img-card'>
    <img src="https://static.vecteezy.com/system/resources/previews/003/491/479/large_2x/beautiful-girl-posing-with-fruits-free-photo.JPG" alt='random'/>
  </div>


  {/* <div className='text-card'>
    <h2>Food is not your enemy.</h2>
    <p>A healthy diet may contain fruits, vegetables, and whole grains, and may include little to no ultra-processed foods or sweetened beverages. The requirements for a healthy diet can be met from a variety of plant-based and animal-based foods, although additional sources of vitamin B12 are needed for those following a vegan diet.</p>
  </div> */}


  </div>


  <div className='text-section'>
    <h1>Food is not your enemy.</h1>
     <h2>Let me prove it to you</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat

    </p>
  </div>

  
  
  <div className='section-two'>
    {uniqueReviewData.slice(0,3).map((item,i)=>(
          
  <div className='img-card-two' key={i+1}>
      <h1>{item.productName}</h1>
    <img src={item.image} alt="review" />
    <p>{item.reviewText}</p>
          <div className='home-review-star'>
            {[1,2,3,4,5].map((star,i)=>(
            <FaStar 
            key={i+1}
            className='star' 
            size={20} 
            color={star <= item?.rating ? "#fb940c" : "gray"}

            />
            )
            )}
            </div>
            <button className='home-btn'><Link to="/review">See More Review</Link></button>
  
  </div>
    ))}



  </div>


</div>
)
}

export default Home