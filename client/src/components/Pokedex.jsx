import React, { Component } from 'react';

import PokemonCard from "./PokemonCard";

class Pokedex extends Component {
    render() {
        return (
            <div className='pokedex'>
                {this.props.pokemons.map((pokemon) => (
                    <PokemonCard name={pokemon.name} type={pokemon.type} image={pokemon.image} />
                ))}
            </div>
        )
    }
}

Pokedex.defaultProps = {
    pokemons: [
        {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            id: 2,
            name: "Squirtle",
            type: "water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            id: 3,
            name: "Butterfree",
            type: "flying",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
            id: 4,
            name: "Rattata",
            type: "normal",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
            id: 5,
            name: "Metapod",
            type: "bug",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
    ]
}

export default Pokedex