import React, { useState } from 'react'
import "./Ingredients.css"
import { data } from '../data';
import IngredientsList from './IngredientsList';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState("");
    const [item,setItem]=useState([]);
    
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let obj = {
          ingredients,
          found:false,
        }
        
        if(ingredients in data){
          console.log("present");
          obj.found=true;

        }

        
        setItem((prev) => [...item, obj]);
        setIngredients("");
  
    }

    



  return (
    <React.Fragment>
    <div className='container'>
        <h2>Ingredients Form</h2>
        <form onSubmit={handleFormSubmit}>
            <div>
            <label htmlFor='ingredients'>Enter Ingredients : </label>
            <input
            type='text'
            id='ingredients'
            value={ingredients}
            onChange={(e)=>setIngredients(e.target.value)}
            placeholder='Ingredients...'
            required
            />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    <div className='item-container'>
        <IngredientsList items={item}/>
    </div >
    </React.Fragment>
  )
}

export default Ingredients