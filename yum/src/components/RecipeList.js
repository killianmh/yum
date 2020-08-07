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
      openModal={props.openModal}>
      {recipe.image
        ? (
            <a href={viewRef} target={viewTarget}>
              <picture>
                <source srcset="small.jpg"
                        media="(max-width: 639px)" />
                <source srcset="medium.jpg"
                        media="(min-width: 640px) and (max-width: 1023px)" />
                <source srcset="large.jpg"
                        media="(min-width: 1024px)" />
                <img src="large.jpg" alt="My image" />
              </picture>
            </a>
          )
          : (null)
        }
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