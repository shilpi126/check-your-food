import React, { useState } from 'react'
import "./Ingredients.css"
import { data } from '../data';
import IngredientsList from './IngredientsList';
import { CiLock } from "react-icons/ci";
import Button from '../UI/Button';
import Input from '../UI/Input';
import { Label } from '../UI/Label';

const Ingredients = () => {
    const [ingredients, setIngredients] = useState("");
    const [item,setItem]=useState([]);
    

    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        let obj = {
          ingredients,
          found:data.includes(ingredients),
        }
        
        
        setItem((prev) => [...item, obj]);
        setIngredients("");

        
  
    }

    



  return (
    <React.Fragment>
            <h2 className='form-title'>Ingredients Form</h2>
   <div  className='bg-card'>

        <div className='first-card'>
          <img src='https://static.vecteezy.com/system/resources/previews/003/491/479/large_2x/beautiful-girl-posing-with-fruits-free-photo.JPG'/>
        </div>
        <div className='form-card'>
          <h1 ><CiLock /></h1>
          <form onSubmit={handleFormSubmit}>
            <div>
              
              <Label
              htmlFor="ingredients"
              text=""
              className="form-label"
              />
                <Input
              type='text'
              id='ingredients'
              value={ingredients}
              onChange={(e)=>{setIngredients(e.target.value)}}
              placeholder='Enter ingrdients...'
              required
              className="form-input"
              />
            </div>

            <Button 
            type='submit'
            className='custom-btn'
            text="Submit"
            />
            
          </form>
            <div className='item-card'>
        <IngredientsList items={item}/>
    </div >
        </div>
      
    </div>


  
    </React.Fragment>
  )
}

export default Ingredients