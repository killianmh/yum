import React from 'react';
import Card from './Card'

const Recipe = props => {
  const {viewRef, viewTarget, addRef, addTarget, name, image} = props.recipe
  return(
      <Card title={name} type={"recipe"}>
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
        <div className="recipe-actions">
          <div className="view">
            <a href={viewRef} target={viewTarget}>
              <div className="recipe-view">
                View Recipe
              </div>
            </a>
          </div>
          <div className="add">
            <a href={addRef} target={addTarget}>
              <div className="recipe-view">
                Add to Menu
              </div>
            </a>
          </div>
        </div>
        
      </Card>
  )
}

export default Recipe