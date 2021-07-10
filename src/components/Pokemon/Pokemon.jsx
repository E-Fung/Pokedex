import React, {useEffect, useState} from "react";
import PokemonPic from "./PokeData/PokemonPic";
import PokemonType from "./PokeData/PokemonTypes";
import axios from "axios";

//container for individual pokemons

export default function Pokemon(props) {
  const [pokemon] = useState(props.pokemon);
  const [pokemonType] = useState(pokemon.data.types);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.data.id}/`;
    axios.get(url).then((data) => {
      setSpecies(data);
      // console.log(data.data.flavor_text_entries[0].flavor_text);
    });
  }, []);

  // console.log(pokemon);
  if (!species) {
    return <div></div>;
  }
  return (
    <div>
      <p>#{pokemon.data.id} </p>
      <p>{pokemon.data.name} </p>
      <p>{species.data.flavor_text_entries[0].flavor_text}</p>
      <PokemonPic
        index={pokemon.data.id}
        key={pokemon.data.id + 1000}
      ></PokemonPic>
      {pokemonType.map((type, index) => (
        <PokemonType
          onTypeClick={props.onTypeClick}
          type={type.type.name}
          key={2000 + pokemon.data.id * 10 + index}
        ></PokemonType>
      ))}
    </div>
  );
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
