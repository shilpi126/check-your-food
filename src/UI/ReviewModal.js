import React from 'react'
import ReactDOM from "react-dom"
import "./ReviewModal.css";

import ReviewForm from '../components/ReviewForm';


const ReviewModal = (props) => {

    

  const portalElement = document.getElementById("overlays");


  return (
    
    <>
        {/* {ReactDOM.createPortal(
        <div className='review-modal-bg'></div>
        ,portalElement
        )} */}


        {ReactDOM.createPortal(
        <div className='review-modal-bg'>
        <div className='review-modal-card'> 
          
        <ReviewForm onClose={props.onClose}/>

      
      

        </div></div>,portalElement)}
        </>

    
  )
}

export default ReviewModal