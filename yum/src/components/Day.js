import React from 'react'
// import './Day.css'
import Card from './Card'

const Day = props => {
  return (
    <Card title={props.title} type={"day"} recipe={props.recipe}>
      {props.recipe ? 
        (
          <div>
            {props.recipe.name}
          </div>
        )
        :(
          <div>
            <button onClick={() => props.add(props.chosenRecipe, props.title)}>
              Add
            </button>
          </div>
        )}
    </Card>
    // <div className="day">
    //   <div className="day-header">
    //     <h2>{props.title}</h2>
    //   </div>
    //   <div className="inner">
    //     {/* <Draggable>props.cards</Draggable> */}
    //   </div>
    // </div>
  )
}

export default Day