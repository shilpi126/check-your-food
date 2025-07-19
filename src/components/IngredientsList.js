import React, {useContext, useState } from 'react'
import "./IngredientsList.css"
import Modal from '../UI/Modal';
import { FaRegSmile } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { MdDangerous } from "react-icons/md";
import { IoWarning } from "react-icons/io5";

import ReviewContext from '../context/review-context';
import AuthContext from '../context/auth-context';

 const info = [
    {id:1,
       quantity:1,
        icon:<FaRegSmile />,
        color:"green",
        res:"good",
       message:"Good, Safe for regular consumption!", 
       description:"These foods are generally safe for daily or frequent consumption."
      },

       {id:2, 
      quantity:3,
        icon:<IoWarning />,
        color:"yellow",
        res:"moderate",
       message:"Moderate, Okay occasionally; limit intake!", 
       description:"Can be eaten occasionally but should not be part of your regular diet."
      },
  
        {
        id:3,
       quantity:5,
       icon:<MdDangerous />,
       color:"red",
       res:"worst",
       message:"Worst	Highly processed; toxic if eaten regularly", 
       description:"Consuming such items frequently may lead to obesity, diabetes, heart issues, hormonal imbalances, and gut problems."
      },

    ]

const IngredientsList = (props) => {
  const [result,setResult] = useState({})
  const [active, setActive] = useState(false);
  const [historyData, setHistoryData]=useState({})
  let list = props.items;
  const reviewCtx = useContext(ReviewContext)
  const authCtx =useContext(AuthContext)
  const ud = authCtx.userData;


let user ={
  name:ud.displayName,
  email:ud.email,
  uid:ud.localId,
  image:ud.photoUrl,
}
 const countItem = (list) =>{

  let goodInredient = 0; 
  let count = 0;
  
    for(let i=0; i<list.length; i++){
      if(list[i].found === true){
        count++;
      }else{
        goodInredient++;
      }
    }
    
    
    return {count, goodInredient};
  }
  

  const handleClick = () => {
    setActive(true);
  const total  = countItem(list);
//console.log(total.goodInredient)
  const  historyD = 
  {list,
    res:null,
    user,

  }
    if(total.count < total.goodInredient ){
      setResult(info[0]);
      historyD.res=info[0];
    }else if(total.count == total.goodInredient){
    
      setResult(info[1]);
    historyD.res=info[1];
    }else{
      setResult(info[2]);
      historyD.res=info[2];
    }

    setHistoryData(historyD)
    reviewCtx.createHistory(historyD)
//console.log(historyData)



  }





  const handleClose = () => {
    setActive(false)
    list.length =0;

  }
  

  console.log(active)
  
  return (
    <React.Fragment>
      
          {active && <Modal onClose={handleClose} res={result} list={list} ></Modal>}
   
 {list.length > 0 &&   <div className='container-list'>
       {list.map((item,index)=>(
            <div className='list' key={index+1}>{item.ingredients} <p  className={`${item.found === true ? "listR" : "listG"}`}>{item.found ? <RxCrossCircled /> : <GrStatusGood  />
}</p></div>
      ))}
      
    </div>}
    {list.length === 0 &&
      <button className='btn' disabled style={{backgroundColor:"gray", color:"black"}}>Is Your Food Healthy</button>
      }
      {list.length > 0 &&
      <button className='btn'  onClick={handleClick}>Is Your Food Healthy</button>
      }
      
   


    </React.Fragment> 
  )
}

export default IngredientsList