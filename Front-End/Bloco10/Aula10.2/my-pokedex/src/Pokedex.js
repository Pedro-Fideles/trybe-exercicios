import { Component } from "react";
import Pokemon from './Pokemon';
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    return (pokemons.map((pokemon) => <Pokemon dataPokemon={pokemon}/>));
  }
}

export default Pokedex;
