const { Router } = require('express')
const pokemons = require('../data/pokedex')

const router = Router()

function sortById(key1, key2){   return key1.numéro - key2.numéro; }  pokemons.sort(sortById);

// :: GET /pokemons > Get all Pokemons
router.get('/', (_, response) => {
  response.json(pokemons)
})

module.exports = router
