import React, { useContext, useState } from 'react'
import ReviewContext from '../context/review-context'
import "./History.css"
const History = () => {
  const historyCtx = useContext(ReviewContext)
  let response = historyCtx.historyData;
  const [historyData,setHistoryData]=useState(response)
 const [sortBy,setSortBy] = useState("")

  const handleSortData = (sortBy ) => {
    const desendingPriority = { worst:1, moderate:2, good:3}
    const assendingPriority = { good:1, moderate:2, worst:3  }
    let sorted = [...historyData];
    if(sortBy === "bad"){
      sorted.sort((a,b)=> desendingPriority[a.result.res] - desendingPriority[b.result.res])
      
    }else if(sortBy === "good"){
      sorted.sort((a,b)=> assendingPriority[a.result.res] - assendingPriority[b.result.res])
      
    }else if(sortBy === "newest"){
          sorted.sort((a,b)=> new Date(b.date) - new Date(a.date))
    }else if(sortBy === "oldest"){
                sorted.sort((a,b)=> new Date(a.date) - new Date(b.date))
    }
    
      setHistoryData(sorted)
  }

  console.log(sortBy)

  return (
    <div>
      <h1 className='history-title'> User History</h1> 
      
      <select 
      className='sort'
      value={sortBy} 
      onChange={(e)=>{handleSortData(e.target.value)}}
      >
        <option value="">Sort By</option>
        <option value="good">Good to bad</option>
        <option value="bad">bad to Good</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

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