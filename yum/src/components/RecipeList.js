import React from 'react';
import Recipe from './Recipe'
import './RecipeList.css'

const RecipeList = props => {

  const recipes = props.recipes

  const recipeList = recipes.map(recipe => 
    <Recipe recipe={recipe}/>
  )

  return(
    <div className="recipe-list">
      {recipeList}
    </div>
  )
}

export default RecipeList