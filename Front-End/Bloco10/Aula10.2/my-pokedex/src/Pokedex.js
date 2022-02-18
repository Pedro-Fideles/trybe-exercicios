import { Component } from "react";
import Pokemon from './Pokemon';
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    return (
      <section className='pokedex'>
        <h1>POKEDEX</h1>
        <section className='container-pokemons'>
          {pokemons.map((pokemon) => <Pokemon dataPokemon={pokemon} key={pokemon.id} />)}
        </section>
      </section>
    )
  }
}

export default Pokedex;
