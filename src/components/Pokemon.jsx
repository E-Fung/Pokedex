import React, { useState } from "react";
// import PokemonPic from "./PokemonPic";
// import Evolution from "./Evolution";

//container for individual pokemons

export default function Pokemon(props) {
  const [pokemon] = useState(props.pokemon);
  console.log(pokemon);

  return <div>{pokemon.data.name}</div>;
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
