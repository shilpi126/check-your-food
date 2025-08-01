import React from 'react'
import ReactDOM from "react-dom"
import "./Modal.css";
import IngredientsChartPage from '../components/IngredientsChartPage';


const Modal = (props) => {

  const portalElement = document.getElementById("overlays");
  
  


  return (
    
    <>
        
        {ReactDOM.createPortal(
        <div className='modal-bg'>
        <div className='modal-card'> 
        <div className='modal-chart'>

        <IngredientsChartPage list={props.list}/>
        </div>

        <div className='modal-details'>
        <p className={props.res.color}>{props.res.icon}</p>
        <p className='msg'>{props.res.message} </p>
        <p className='des'>{props.res.description}</p>
        <button className='modal-btn' onClick={props.onClose}>close</button>
      
        </div>
        </div></div>,portalElement)}
        </>

    
  )
}

export default Modal