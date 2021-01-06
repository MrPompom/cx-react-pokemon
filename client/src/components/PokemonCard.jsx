import React, { Component, } from 'react'
import {Link} from 'react-router-dom'
class PokemonCard extends Component {
    render() {
        const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.ndex}.png`;
        
        return (
          
           <Link to = {`/pokemon/${this.props.id}`}>
            
            <button className="pokemon-card">
       
          <div className ="photo">
            <img src={url} alt="img-pokemon" />
            <h1>{this.props.id}</h1>
            <h1>{this.props.name}</h1>
          </div>
        
      </button>
         
       
      
      </Link>
        )
    }
}

export default PokemonCard
