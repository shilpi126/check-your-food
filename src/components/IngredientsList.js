import React, {useState } from 'react'
import "./IngredientsList.css"
import Modal from '../UI/Modal';
import { FaRegSmile } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { MdDangerous } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { RiProhibited2Line } from "react-icons/ri";

const IngredientsList = (props) => {
  const [result,setResult] = useState({})
  const [active, setActive] = useState(false);
  // const [num,setNum] =useState(0);
  let list = props.items;

  const info = [
    {id:1,
       quantity:1,
        icon:<FaRegSmile />,
        color:"green",
       message:"Good, Safe for regular consumption!", 
       description:"These foods are generally safe for daily or frequent consumption."
      },

       {id:2, 
      quantity:3,
        icon:<IoWarning />,
        color:"yellow",
       message:"Moderate, Okay occasionally; limit intake!", 
       description:"Can be eaten occasionally but should not be part of your regular diet."
      },
  
        {
        id:3,
       quantity:5,
       icon:<MdDangerous />,
       color:"red",
       message:"Worst	Highly processed; toxic if eaten regularly", 
       description:"Consuming such items frequently may lead to obesity, diabetes, heart issues, hormonal imbalances, and gut problems."
      },

    ]
 
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

    if(total<=1){
      setResult(info[0]);
    
    }else if(total<=3){
    
      setResult(info[1]);
    
    }else{
      setResult(info[2]);
    }


    
  }

  const handleClose = () => {setActive(false)}

  
  return (
    <React.Fragment>
      
          {active && <Modal onClose={handleClose} res={result} list={list} ></Modal>}
   
 {list.length > 0 &&   <div className='container-list'>
       {list.map((item,index)=>(
            <div className='list' key={index+1}>{item.ingredients} <p  className={`${item.found === true ? "listR" : "listG"}`}>{item.found ? <RxCrossCircled /> : <GrStatusGood  />
}</p></div>
      ))}
      
    </div>}
      {list.length > 0 &&
      <button className='btn' onClick={handleClick}>Is Your Food Healthy</button>
      }
      
   


    </React.Fragment> 
  )
}

export default IngredientsList