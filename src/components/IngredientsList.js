import React, { useEffect, useState } from 'react'
import "./IngredientsList.css"
import Modal from '../UI/Modal';

const IngredientsList = (props) => {
  const [result,setResult] = useState({})
  const [active, setActive] = useState(false);
  let list = props.items;

  

 
 const countItem = (list) =>{

  
  let count = 0;
    for(let i=0; i<list.length; i++){
      if(list[i].found === true){
        count++;
      }
    }

    return count;
 }
  

  const handleClick = () => {
    setActive(true);
  
  const total  = countItem(list);
  
    if(total>3){
      const obj = {
        msg:"Not Healthy!",

      }
      setResult(obj);
    
    }else{
      const obj = {
        msg:" Your Food is Healthy!",
        
      }
      setResult(obj);
    
    }

    list.length = 0;
    
  }

  const handleClose = () => {setActive(false)}

  
  return (
    <React.Fragment>
      
          {active && <Modal onClose={handleClose} res={result}></Modal>}
   
 {list.length > 0 &&   <div className='container-list'>
       {list.map((item,index)=>(
            <div className={`${item.found === true ? "listR" : "listG"}`} key={index+1}>{item.ingredients}</div>
      ))}
      
    </div>}
      {list.length > 0 &&
      <button className='btn' onClick={handleClick}>Is Your Food Healthy</button>
      }
      
   


    </React.Fragment> 
  )
}

export default IngredientsList