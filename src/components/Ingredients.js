import React, { useState } from 'react'
import "./Ingredients.css"
import { data } from '../data';
import IngredientsList from './IngredientsList';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState("")
    console.log(data);
  return (
    <React.Fragment>
    <div className='container'>
        <h2>Ingredients Form</h2>
        <form>
            <label>Enter Ingredients : </label>
            <input
            type='text'
            id='ingredients'
            value={ingredients}
            onChange={(e)=>setIngredients(e.target.value)}
            placeholder='Ingredients...'
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
    <div className='container'>
        <IngredientsList/>
    </div >
    </React.Fragment>
  )
}

export default Ingredients