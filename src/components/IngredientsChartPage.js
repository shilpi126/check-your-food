import React, { useState } from 'react'
import {ingredientRiskLevels} from "../data"
import "./IngredientsChartPage.css"
import {PieChart,Pie,Tooltip,Cell} from "recharts"


const IngredientsChartPage = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputData = props.list; 

  let green=0, yellow=0, red=0;

inputData.forEach((inputItem)=>{
  const matchedRisk = ingredientRiskLevels.find((riskItem)=>
  inputItem.ingredients.toLowerCase().includes(riskItem.name.toLocaleLowerCase()));

  if(matchedRisk){
    if(matchedRisk.level === "red") red++;
    else if(matchedRisk.level === "yellow") yellow++;
    
  }else{
    green++;
  }
})

    const data=[
        {name:"Safe", value:green},
        {name:"Modrate", value:yellow},
        {name:"Harmful", value:red}
    ]



const onPieEnter = (_,index) => {setActiveIndex(index)}

 const COLORS = ['#2ad808ff', '#f4fb1aff',  '#fa1408ff'];

  return (
    <div className='car-chart-card'>
        <PieChart width={700} height={700}>
          <Pie
            activeIndex={activeIndex}
            data={data}
            dataKey="value"
            outerRadius={120}
            innerRadius={80}
            fill='green'
            onMouseEnter={onPieEnter}
            style={{cursor:"pointer", outline:"none",}}

          >
          {data.map((entry,index)=>(
            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
          ))}
          </Pie>
          <Tooltip/>
        </PieChart>
        
    </div>
  )
}

export default IngredientsChartPage