import React from 'react'
import "./Home.css"

import Header from '../components/Header'
import banner from "../assets/Simple Food Banner.png"
import Footer from '../components/Footer'

const Home = () => {

  
  return (
    <div className='home-container'>
      <Header/>
      <img src={banner}/>


      <div className='section-one'>
      
      <div className='img-card'>
        <img src="https://thefast800.com/wp-content/uploads/2022/09/How-to-stop-eating-junk-food-scaled.jpeg"/>
      </div>


      <div className='text-card'>
        <h2>ghjgjgjgjgh</h2>
        <p>A healthy diet may contain fruits, vegetables, and whole grains, and may include little to no ultra-processed foods or sweetened beverages. The requirements for a healthy diet can be met from a variety of plant-based and animal-based foods, although additional sources of vitamin B12 are needed for those following a vegan diet.[4] Various nutrition guides are published by medical and governmental institutions to educate individuals on what they should be eating to be healthy</p>
        <p>A healthy diet may contain fruits, vegetables, and whole grains, and may include little to no ultra-processed foods or sweetened beverages. The requirements for a healthy diet can be met from a variety of plant-based and animal-based foods, although additional sources of vitamin B12 are needed for those following a vegan diet.[4] Various nutrition guides are published by medical and governmental institutions to educate individuals on what they should be eating to be healthy</p>
        
        
      
      </div>
      </div>




      <div></div>
      <Footer/>
    </div>
  )
}

export default Home