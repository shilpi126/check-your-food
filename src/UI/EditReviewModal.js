import React from 'react'
import ReactDOM from "react-dom"
import "./EditReviewModal.css";


import EditReview from '../components/EditReview';

const EditReviewModal = (props) => {

    

  const portalElement = document.getElementById("overlays");


  return (
    
    <>
        

        {ReactDOM.createPortal(
        <div className='review-modal-bg'>
        <div className='review-modal-card'> 
        <EditReview editdata={props.editdata} onClose={props.onClose}/>
        
       

        </div></div>,portalElement)}
        </>

    
  )
}

export default EditReviewModal