import './App.css';
import React from 'react'
import {useEffect, useState} from 'react'
import Recipe from './Recipe';
import { v4 as uuidv4 } from 'uuid'

const {REACT_APP_ID, REACT_APP_KEY} = process.env;
function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('caramel')

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data.hits);
  }

  useEffect(() => {
    getRecipes();
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  } 

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
  <div className="App">
      <h1>Recipe Finder</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search for recipes
        </button>
      </form>
        {recipes.map(recipe => (
          <Recipe 
            key={uuidv4()} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients} 
            /> 
        ))}
    </div>    
  );
}

export default App;
