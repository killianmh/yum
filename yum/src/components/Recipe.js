import React from 'react';
import Card from './Card'

const Recipe = props => {
  const {viewRef, viewTarget, addRef, addTarget, name, image} = props.recipe
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
  return(
      <Card title={name} type={"recipe"} actions={recipeActions} key={props.key}>
        {image
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
}

export default Recipe