import React from 'react';
import Recipe from './Recipe'
import Card from './Card'
import './RecipeList.css'


const RecipeList = props => {
  const recipes = props.recipes
  const {viewRef, viewTarget, addRef, addTarget, name, image} = props
  const recipeActions = {
    number: 2,
    actions: [
      {
        name: "view",
        label: "View Recipe",
        onClick: props.openModal
      },
      {
        name: "add",
        label: "Add to Menu",
        onClick: props.openModal
      }
    ]
  }

  const recipeList = recipes.map((recipe, id) => 
    <Card 
      title={recipe.name} 
      type={"recipe"} 
      actions={recipeActions} 
      key={id}
      openModal={props.openModal}
      image={recipe.image}>
    </Card>
  )

  return(
    <div>
      <div className="recipe-list">
        {recipeList}
      </div>
    </div>
  )
}

export default RecipeList