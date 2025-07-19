import React from 'react'
import ReactDOM from "react-dom"
import "./EditReviewModal.css";

import { IoCloseSharp } from "react-icons/io5";
import EditReview from '../components/EditReview';

const EditReviewModal = (props) => {

    

  const portalElement = document.getElementById("overlays");


  return (
    
    <>
        {ReactDOM.createPortal(
        <div className='review-modal-bg'></div>
        ,portalElement
        )}

        {ReactDOM.createPortal(
        <div className='review-modal-card'> 
        <EditReview editdata={props.editdata} onClose={props.onClose}/>
        
        <button className='review-modal-btn' onClick={props.onClose}><IoCloseSharp size={25}/></button>
        

        </div>,portalElement)}
        </>

    
  )
}

export default EditReviewModal