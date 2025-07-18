import React, { useContext, useState } from 'react'
import ReviewContext from '../context/review-context'
import "./History.css"
const History = () => {
  const historyCtx = useContext(ReviewContext)
  let response = historyCtx.historyData;
  const [historyData,setHistoryData]=useState(response)


  const handleSortData = (sortBy = "result") => {
    const priority = { worst:1, moderate:2, good:3}
    if(sortBy === "result"){
      let sorted =  [...historyData].sort((a,b)=> priority[a.result.res] - priority[b.result.res])
      setHistoryData(sorted)
    }else{
      setHistoryData(response)
    }
    
    
  }

  return (
    <div>
      <h1 className='history-title'> User History</h1>
      <button className='sort' onClick={()=>{handleSortData("result")}}>Sort By date</button>
      <div className='history-card'>
        {historyData.map((history)=>(
          <div className='history-info'>
            <div className='history-user'>
              <img src={history.user.image} />
              <p>Name : {history.user.name}</p>
              <p>Email Id : {history.user.email}</p>
            </div>
            <div className='history-list'>{history.list.map((item)=>(
              <p className={item.found ? "red":"green"}>{item.ingredients}</p>
            ))}</div>
            <div className='history-res'>
               <p>Message : {history.result.res}</p>
              <p>Message : {history.result.message}</p>
              <p>Description : {history.result.description}</p>
            </div>
          </div>
        ))
        }
        </div>

    </div>
  )
}

export default History