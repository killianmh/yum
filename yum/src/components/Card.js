import React from 'react'
import './Card.css'


const Card = props => {
  let cardClass
  let renderedActions
  const {actions} = props.actions
  switch (props.type) {
    case "day":
      cardClass = "card card-day"
      break
    case "recipe":
      cardClass = "card card-recipe"
      // renderedActions = actions.map((action, i) => 
      //   <button key={props.title + i} className={action.name} onClick={() => action.onClick(props.title, i)}>
      //     {switch (i) {
      //       case 0:
              
      //     }}
      //   </button>
      // )
      break
  }
  
  // console.log(props.title)
  
  
  return (
    <div className={cardClass} style={{backgroundImage: "url(" + props.image + ")"}}>
      <div className="card-header">
        <h2>{props.title}</h2>
      </div>
      <div className="inner">
        {props.children}
      </div>
      <div className="card-footer">
        <button className={actions[0].name} onClick={() => actions[0].onClick(props.title, 0)}>
          <i className="fas fa-edit" />
        </button>
        <button className={actions[1].name} onClick={() => actions[1].onClick(props.title, 1)}>
          <i className="fas fa-plus" />
        </button>
      </div>
      {/* {renderedActions ?
        (
          <div className="card-footer">
            {renderedActions}
          </div>
        )
        :(null)
      } */}
      
    </div>
  )
}

export default Card