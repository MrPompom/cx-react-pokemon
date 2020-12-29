const argv = process.argv
const express = require("express")
const app = express();
const pokedex = require('./routes/pokedex.json')

app.listen(argv[2], function() {
    console.log(
      "Server is listening on http://localhost:"+argv[2]
    );
  });

  app.get("/", (req, res) => {
    return res.json("acceuil, veuillez utilisez votre barre de recherche : /pokemons = pokedex, /pokemons/id pour faire uen recherche")
  });

  app.get("/pokemons", (req, res) => {
    return res.json(require('./routes/pokedex.json'))
  });

  app.get("/pokemons/:id", (req, res) => {
    const search_pokemon = pokedex.find(c => c.id == parseInt(req.params.id))
    if(!search_pokemon) {
      return (res.status(404).send("Le pokemon que vous cherché n'exixte pas dans le pokédex"))
    }
    else {
      res.send(search_pokemon)
    }
})