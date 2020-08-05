import React from 'react';
import Day from './Day'
import './Menu.css'

const Menu = props => {

  return (
    <div className="menu">
      <Day title={"Sunday"}></Day>
      <Day title={"Monday"}></Day>
      <Day title={"Tuesday"}></Day>
      <Day title={"Wednesday"}></Day>
      <Day title={"Thursday"}></Day>
      <Day title={"Friday"}></Day>
      <Day title={"Saturday"}></Day>
    </div>
  )
}

export default Menu