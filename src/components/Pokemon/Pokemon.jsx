import React, { useEffect, useState } from "react";
import PokemonPic from "./PokeData/PokemonPic";
import PokemonType from "./PokeData/PokemonTypes";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import "./Pokemon.css";
import { Box } from "@material-ui/core";

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
  });

  // console.log(pokemon);
  if (!species) {
    return <div></div>;
  }
  return (
    <Box container style={{ backgroundColor: "white" }} width={200}>
      {/* <p>{species.data.flavor_text_entries[0].flavor_text}</p> */}
      <Grid container justify="center" style={{ backgroundColor: "grey" }}>
        <PokemonPic
          onPicClick={props.onPicClick}
          index={pokemon.data.id}
          key={pokemon.data.id + 1000}
        ></PokemonPic>
      </Grid>
      <p style={{ textAlign: "center" }}>
        #{pokemon.data.id} {pokemon.data.name}
      </p>
      {/* <p>{pokemon.data.name} </p> */}
      <Grid container direction="row" justify="space-around">
        {pokemonType.map((type, index) => (
          // <Grid item>
          <PokemonType
            onTypeClick={props.onTypeClick}
            type={type.type.name}
            key={2000 + pokemon.data.id * 10 + index}
          ></PokemonType>
          // </Grid>
        ))}
      </Grid>
    </Box>
  );
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
