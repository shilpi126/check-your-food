import React from 'react'
import ReactDOM from "react-dom"
import "./Modal.css";
import IngredientsChartPage from '../components/IngredientsChartPage';


const Modal = (props) => {
console.log(props.list)
  const portalElement = document.getElementById("overlays");
  
  return (
    
    <div className='modal'>
     
   
      {ReactDOM.createPortal(
        <div className='modal-bg'></div>,portalElement)}
        {ReactDOM.createPortal(
        <div className='modal-card'> 
        <div className='modal-chart'>
          <p style={{color:"black"}}>charts</p>
      <IngredientsChartPage list={props.list}/>
      </div>

         <div className='modal-details'>
        <p className={props.res.color}>{props.res.icon}</p>
        <p className='msg'>{props.res.message} </p>
        <p className='des'>{props.res.description}</p>
        <button className='modal-btn' onClick={props.onClose}>close</button>
        </div></div>,portalElement)}
        </div>

    
  )
}

export default Modal