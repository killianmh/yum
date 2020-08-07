import React from 'react';
import Day from './Day'
import './Menu.css'

const Menu = props => {

  const testMenu = 
  [
    {
      day: "Sunday"
    }, 
    {
      day: "Monday"
    },
    {
      day: "Tuesday"
    },
    {
      day: "Wednesday",
      recipe: 
        {
          name: "pudding7", 
          viewRef: "#", 
          viewTarget: "_blank",
          addRef: "/",
          addTarget: "_self",
          image: true
        }
    },
    {
      day: "Thursday"
    },
    {
      day: "Friday"
    },
    {
      day: "Saturday"
    },
  ]

  const [menu, setMenu] = React.useState(testMenu)

  const addToMenu = (recipe, day) => {
    let newMenu = menu.map(item => {
      if(item.day !== day) return item 
      return {...item, recipe: recipe}
    })
    setMenu(newMenu)
  }

  const days = menu.map((day, i) => 
    <Day key={i} title={day.day} recipe={day.recipe} add={addToMenu} chosenRecipe={props.recipe}/>
  )

  return (
    <div className="menu">
      <h2>Add {props.recipe.name} to your menu</h2>
      {days}
    </div>
  )
}

export default Menu