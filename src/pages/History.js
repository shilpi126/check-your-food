import React, { useContext, useEffect, useState } from 'react'

import "./History.css"
import Loading from '../components/Loading'
import IngredientsContext from '../context/ingredients-contex'
const History = () => {
  const ingredientsCtx = useContext(IngredientsContext)
  let response = ingredientsCtx.historyData;
  console.log(response)
  const [historyData,setHistoryData]=useState([])
 const [sortBy,setSortBy] = useState("")

useEffect(()=>{
if(response.length > 0){
  setHistoryData(response)
}
},[response])

console.log(historyData)

  const handleSortData = (sortBy ) => {
    const desendingPriority = { worst:1, moderate:2, good:3}
    const assendingPriority = { good:1, moderate:2, worst:3  }
    let sorted = [...historyData];
    if(sortBy === "bad"){
      sorted.sort((a,b)=> desendingPriority[a.result?.res] - desendingPriority[b.result?.res])
      
    }else if(sortBy === "good"){
      sorted.sort((a,b)=> assendingPriority[a.result?.res] - assendingPriority[b.result?.res])
      
    }else if(sortBy === "oldest"){
          sorted.sort((a,b)=> new Date(a.date) - new Date(b.date))
    }else if(sortBy === "newest"){
              sorted.sort((a,b)=> new Date(b.date) - new Date(a.date))
    }
    
      setHistoryData(sorted)
  }

  console.log(historyData)

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
        {!(historyData.length > 0) && <Loading/>}
        {historyData && historyData.map((history)=>(
          <div className='history-info' key={history.id}>
            <div className='history-user'>
              <img src={history.user?.image} alt='history pic'/>
              <p>{history.user?.name}</p>
              
            </div>
            <div className='history-list'>{history.list.map((item,i)=>(
              <p className={item.found ? "red":"green"} key={i+1}>{item.ingredients}</p>
            ))}</div>
            <div className='history-res'>
              <p>Result : {history?.result?.res}</p>
              <p>Message : {history.result?.message}</p>
              <p>Description : {history.result?.description}</p>
            </div>
          </div>
        ))
        }
        </div>

    </div>
  )
}

export default History