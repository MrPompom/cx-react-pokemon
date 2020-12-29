import React, { Component } from 'react'
import './App.css';
import Pokedex from "./components/Pokedex";

class App extends Component {
    render() {
        return (
            <Pokedex />
        )
    }
}

/*function App() {
  fetch('http://localhost:4000/pokemons')
      .then((response) => {
        response.json()
            .then((result) => {
                console.log(result)
            })
      })
      .catch((error) => {
          console.log(error)
      })

  return <Pokedex />
}*/

export default App;
