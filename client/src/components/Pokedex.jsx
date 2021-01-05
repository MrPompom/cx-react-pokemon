import React, { Component } from 'react';

import PokemonCard from "./PokemonCard";

class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.state = { pokemons: [] }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:4000/pokemons')
        const pokemons = await response.json()

        this.setState({ pokemons })
    }

    render() {
        const image_url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.numero}.png';
        return (
            <div className='pokedex'>
                {this.state.pokemons.map((pokemon) => (
                    <PokemonCard id={pokemon.numero} name={pokemon.nom} ndex={pokemon.ndex} />
                ))}
            </div>
        )
    }
}

export default Pokedex
