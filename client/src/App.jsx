import React, { Component } from 'react'
import './App.css';
import Pokedex from "./components/Pokedex";
import PokemonCard from "./components/PokemonCard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PokemonDetails from "./components/PokemonDetails";

class App extends Component {
    render() {
        return (
            <Router>
              <Switch>
            
              <Route exact path="/"><Pokedex /></Route>
              <Route path="/pokemon/:id"><PokemonDetails/></Route>
            
              </Switch>
            </Router>
        )
    }
}


export default App;
