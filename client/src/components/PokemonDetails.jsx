import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class  PokemonDetails extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemon: {} }
    }
    async componentDidMount(){
        const data = await fetch(`http://localhost:4000/pokemons/${this.props.match.params.id}`)
        
        this.setState({ pokemon: await data.json()})

    
    }
    
    
    render () {
        const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.match.params.id}.png`;
       
     return (
         <div>
        
        <img src={url}/>
        <p>Name: {this.state.pokemon.nom} </p>
        <p>Poids: {this.state.pokemon.poids}</p>
        <p>Types: {this.state.pokemon.type1} , {this.state.pokemon.type2}</p>
        <p>Formes: {this.state.pokemon.forme}</p>
        
        
        </div>
        
         
     )
    }
}
export default withRouter(PokemonDetails)