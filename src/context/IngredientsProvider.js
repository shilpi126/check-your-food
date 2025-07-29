import React, { useContext, useEffect, useState } from 'react'
import IngredientsContext from './ingredients-contex'
import axios from 'axios'
import AuthContext from './auth-context'

const api_key = "https://smart-foodie-app-default-rtdb.firebaseio.com"


const IngredientsProvider = ({children}) => {
const authCtx = useContext(AuthContext)
const storeUid = authCtx.uid;
const [historyData, setHistoryData] = useState([])

//console.log(storeUid)



  const createHistory  = async(data) =>{

      //console.log(data)
    try{
    const res = await axios.post(`${api_key}/history/${storeUid}.json`,{
      ...data,
      
    date:new Date().toISOString(),
    }
    );
    const response = res.data.name;
    //console.log(response);
    const product ={
      id:response,
      list:data.list,
      result:data.res,
      
      user:data.userProfile,
      date:new Date().toISOString(),
      
    }

    setHistoryData((prev)=>[...prev, product])
    
    }catch(err){
        console.log(err);
    }

    }

    //console.log(historyData)

    const getHistoryData  = async() => {
    
    try{
        const res = await axios.get(`${api_key}/history/${storeUid}.json`);
        const response = res.data;
        //console.log(response)
        const data=[]
        
        for(let key in response){
          //console.log(key)
        const product ={
      id:key,
      list:response[key].list,
      result:response[key].res,
      
      user:response[key].userProfile,
      date:response[key].date,
      
        }

          data.push(product)
          //console.log(product);
        }
      setHistoryData(data)
        }catch(err){
            console.log(err);
        }
    }

   //console.log(historyData)

    const ingredientsValue = {
    
    
    createHistory,
    historyData,
    getHistoryData,
    setHistoryData,
    }

  return (
    <IngredientsContext value={ingredientsValue}>{children}</IngredientsContext >
  )
}

export default IngredientsProvider