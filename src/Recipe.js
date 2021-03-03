import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="card">
        <div className="container">
            <h1>{title}</h1>
            <h6>Calories: {calories.toFixed(2)}</h6>
            <ol>
                {ingredients.map(ingredient => (
                   <li key={uuidv4()}>
                       {ingredient.text}
                   </li> 
                ))}
            </ol>
            <img src={image} alt=""/>
        </div>
        </div>
    )
}

export default Recipe;