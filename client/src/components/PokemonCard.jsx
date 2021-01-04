import React, { Component } from 'react'

class PokemonCard extends Component {
    render() {
        return (
            <div className='pokemon-card'>
                <h1> {this.props.name} </h1>
                <img src={this.props.image} />
                <p> Type: {this.props.type} </p>
            </div>
        )
    }
}

export default PokemonCard
