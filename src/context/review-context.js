import {act, createContext} from "react"


const ReviewContext = createContext({
    createReview:(data)=>{},
    readReview:()=>{},
    deleteReview:(id)=>{},
    updateReview:(id)=>{},
    reviewData:[],
    uniqueTitles:[],
    loading:true,
    
    filterProductReview:(productName)=>{},
    activeReview:[],
})


export default ReviewContext