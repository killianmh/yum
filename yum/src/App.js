import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import RecipeList from './components/RecipeList'
import Modal from 'react-modal';

Modal.setAppElement('#root')

function App() {
  const testRecipes = 
    [
      {
        name: "pudding", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
      {
        name: "pudding2", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: false
      }, 
      {
        name: "pudding3", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
      {
        name: "pudding4", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
      {
        name: "pudding5", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
      {
        name: "pudding6", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
      {
        name: "pudding7", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
      {
        name: "pudding8", 
        viewRef: "#", 
        viewTarget: "_blank",
        addRef: "/",
        addTarget: "_self",
        image: true
      }, 
    ]
  
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalType, setModalType] = React.useState("recipe")
  const [modalRecipe, setModalRecipe] = React.useState(null)

  const openModal = (title, id) => {
    switch (id) {
      case 0:
        setModalType("recipe")
        break
      case 1:
        setModalType("menu")
        break
    }
    console.log(title, id)
    let modalIndex = testRecipes.map(el => {
      return el.name
    }).indexOf(title)
    console.log(modalRecipe)
    setModalRecipe(testRecipes[modalIndex])
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const generateModalContent = () => {
    if(modalIsOpen) {
      if(modalType === "recipe"){
        console.log(modalRecipe)
        let recipe = modalRecipe
        console.log(recipe)
        return (
          <div>
            <h2>
              {recipe.name}
            </h2>
          </div>
        )
      }
      else if(modalType === "menu") {
        return (
          <Menu recipe={modalRecipe} />
        )
      }
    }
  }
  
    return (
    <div className="App">
      {/* <Header>
        <Nav></Nav>
      </Header> */}
      {/* <Menu /> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        {generateModalContent()}
      </Modal>
      <RecipeList recipes={testRecipes} openModal={openModal}/>
    </div>
  );
}

export default App;
