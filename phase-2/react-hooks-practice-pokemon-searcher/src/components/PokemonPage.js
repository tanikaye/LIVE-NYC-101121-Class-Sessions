import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  // I want to keep the fetched pokemon in state so I don't have to keep re-fetching them
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // useEffect with an empty dependency [] will trigger the fetch in its callback fn only once, when PokemonPage first mounts in DOM
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(setPokemon)
  }, [])

  // this filter will be applied every time there is a change to searchTerm in state
  // when the searchTerm == "", then all names match and all pokemon are displayed
  // adding .toLowerCase() to both strings we are matching makes the search case insensitive
  const pokemonToDisplay = pokemon.filter((pokeObj) => pokeObj.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleAddPokemon(newPokemon){
    // you could also fetch POST /pokemon here and still take response object and use it with
    // setPokemon as below
    setPokemon([newPokemon, ...pokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
