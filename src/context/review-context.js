import {createContext} from "react"


const ReviewContext = createContext({
    createReview:(data)=>{},
    readReview:()=>{},
    deleteReview:(id)=>{},
    updateReview:(id)=>{}
})


export default ReviewContext