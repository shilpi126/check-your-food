import React, { useContext, useEffect } from 'react'
import "./Home.css"

import Header from '../components/Header'
import bg from "../assets/food_banner_design.png"
import banner from "../assets/food_banner_design.png"
import Footer from '../components/Footer'
import ReviewContext from '../context/review-context'

const Home = () => {
   const reviewCtx = useContext(ReviewContext)

  

  return (
    <div className='home-container'>
      
      <img src={banner}/>


      <div className='section-one'>
      
      <div className='img-card'>
        <img src="https://thefast800.com/wp-content/uploads/2022/09/How-to-stop-eating-junk-food-scaled.jpeg"/>
      </div>


      <div className='text-card'>
        <h2>Food is not your enemy.</h2>
        <p>A healthy diet may contain fruits, vegetables, and whole grains, and may include little to no ultra-processed foods or sweetened beverages. The requirements for a healthy diet can be met from a variety of plant-based and animal-based foods, although additional sources of vitamin B12 are needed for those following a vegan diet.[4] Various nutrition guides are published by medical and governmental institutions to educate individuals on what they should be eating to be healthy</p>
      
        
      
      </div>
      </div>




      <div className='text-section'>
        <h1>Food is not your enemy.
        Let me prove it to you</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
        </p>
      </div>

      <div>

      </div>
      
      <div className='section-one'>
      
      <div className='img-card-two'>
         <h1>Food is not your enemy.</h1>
        <img src="https://thefast800.com/wp-content/uploads/2022/09/How-to-stop-eating-junk-food-scaled.jpeg"/>
       
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
      
      
      </div>
 <div className='img-card-two'>
    <h1>Food is not your enemy.</h1>
        <img src="https://thefast800.com/wp-content/uploads/2022/09/How-to-stop-eating-junk-food-scaled.jpeg"/>
      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
      
      </div>

     <div className='img-card-two'>
        <h1>Food is not your enemy.</h1>
        <img src="https://thefast800.com/wp-content/uploads/2022/09/How-to-stop-eating-junk-food-scaled.jpeg"/>
      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
      
      </div>
      </div>

  
    </div>
  )
}

export default Home