import React, { useState } from "react";
import PokemonPic from "./PokemonPic";
import PokemonType from "./PokemonTypes";

//container for individual pokemons

export default function Pokemon(props) {
  const [pokemon] = useState(props.pokemon);
  const [pokemonType] = useState(pokemon.data.types);
  // console.log(pokemonType);
  return (
    <div>
      <p>#{pokemon.data.id} </p>
      <p>{pokemon.data.name} </p>
      <PokemonPic
        index={pokemon.data.id}
        key={pokemon.data.id + 1000}
      ></PokemonPic>
      {pokemonType.map((types, index) => (
        <PokemonType
          types={types.type.name}
          key={2000 + pokemon.data.id * 10 + index}
        ></PokemonType>
      ))}
    </div>
  );
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
