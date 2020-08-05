import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import RecipeList from './components/RecipeList'

function App() {
  const testRecipes = 
    [
      {
        name: "pudding", 
        viewRef: "#", 
        viewTarget: "blank",
        addRef: "#",
        addTarget: "blank",
        image: true
      }, 
      {
        name: "pudding", 
        viewRef: "#", 
        viewTarget: "blank",
        addRef: "#",
        addTarget: "blank",
        image: false
      }, 
    ]
  return (
    <div className="App">
      {/* <Header>
        <Nav></Nav>
      </Header> */}
      {/* <Menu /> */}
      <RecipeList recipes={testRecipes}/>
    </div>
  );
}

export default App;
