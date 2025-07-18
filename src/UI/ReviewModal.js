import React from 'react'
import ReactDOM from "react-dom"
import "./ReviewModal.css";
import IngredientsChartPage from '../components/IngredientsChartPage';
import ReviewForm from '../components/ReviewForm';
import { IoCloseSharp } from "react-icons/io5";

const ReviewModal = (props) => {

    

  const portalElement = document.getElementById("overlays");


  return (
    
    <>
        {ReactDOM.createPortal(
        <div className='review-modal-bg'></div>
        ,portalElement
        )}


        {ReactDOM.createPortal(
        <div className='review-modal-card'> 
        <ReviewForm/>

      
        <button className='review-modal-btn' onClick={props.onClose}><IoCloseSharp size={25}/></button>
      

        </div>,portalElement)}
        </>

    
  )
}

export default ReviewModal