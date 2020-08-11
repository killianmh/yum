import React from 'react';
import './Recipe.css';
import List from './List'

const Recipe = props => {
  const {viewRef, viewTarget, addRef, addTarget, name, image, ingredients, instructions} = props.recipe
  // const recipeActions = {
  //   number: 2,
  //   actions: [
  //     {
  //       name: "view",
  //       label: "View Recipe",
  //       onClick: props.openModal
  //     },
  //     {
  //       name: "add",
  //       label: "Add to Menu",
  //       onClick: props.openModal
  //     }
  //   ]
  // }
  return(
      // <Card title={name} type={"recipe"} actions={recipeActions} key={props.key}>
      //   {image
      //     ? (
      //         <a href={viewRef} target={viewTarget}>
      //           <picture>
      //             <source srcset="small.jpg"
      //                     media="(max-width: 639px)" />
      //             <source srcset="medium.jpg"
      //                     media="(min-width: 640px) and (max-width: 1023px)" />
      //             <source srcset="large.jpg"
      //                     media="(min-width: 1024px)" />
      //             <img src="large.jpg" alt="My image" />
      //           </picture>
      //         </a>
      //       )
      //     : (null)
      //   }
      // </Card>
      <div className="modalRecipe">
        {image
          ? (
              <div className="imgCont">
                <picture>
                  <source srcset={image}
                   />
                  <img src={image} alt="My image" className="recipeImg"/>
                </picture>
              </div>
            )
          : (null)
        }
        <List
          type={"ingredients"}
          ingredients={ingredients}
          />
        <List
          type={"instructions"}
          instructions={instructions}
          />
      </div>
  )
}

export default Recipe