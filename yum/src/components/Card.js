import React from 'react'
import './Card.css'

const Card = props => {
  let cardClass
  let renderedActions
  switch (props.type) {
    case "day":
      cardClass = "card card-day"
      break
    case "recipe":
      cardClass = "card card-recipe"
      const {actions} = props.actions
      renderedActions = actions.map((action, i) => 
        <button key={props.title + i} className={action.name} onClick={() => action.onClick(props.title, i)}>
          {action.label}
        </button>
      )
      break
  }
  
  // console.log(props.title)
  
  
  return (
    <div className={cardClass}>
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <div className="inner">
        {props.children}
      </div>
      {renderedActions ?
        (
          <div className="card-footer">
            {renderedActions}
          </div>
        )
        :(null)
      }
      
    </div>
  )
}

export default Card