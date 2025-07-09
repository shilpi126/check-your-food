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
        <p className={props.res.color}>{props.res.icon}</p>
        <p className='msg'>{props.res.message} </p>
        <p className='des'>{props.res.description}</p>
        <button className='modal-btn' onClick={props.onClose}>close</button>
        </div>,portalElement)}

    </div>
  )
}

export default Modal