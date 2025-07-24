import {createContext} from "react"


const IngredientsContext = createContext({
    
    
    createHistory:(data)=>{},
    historyData:[],
    setHistoryData:[],
    getHistoryData:()=>{},
})


export default IngredientsContext