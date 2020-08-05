import React from 'react'
import './Card.css'

const Card = props => {
  let cardClass
  switch (props.type) {
    case "day":
      cardClass = "card card-day"
      break
    case "recipe":
      cardClass = "card card-recipe"
      break
  }
  return (
    <div className={cardClass}>
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <div className="inner">
        {props.children}
      </div>
    </div>
  )
}

export default Card