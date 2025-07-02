import React from 'react'
import ReactDOM from "react-dom"
import "./Modal.css";


const Modal = (props) => {

  const portalElement = document.getElementById("overlays");
  

  return (
    
    <div className='modal'>
      {ReactDOM.createPortal(
        <div className='modal-bg'></div>,portalElement)}
        {ReactDOM.createPortal(
        <div className='modal-card'> 
        
        <h1>{props.res.msg} </h1>
        <p></p>
                <button className='modal-btn' onClick={props.onClose}>close</button>
        </div>,portalElement)}

    </div>
  )
}

export default Modal