import React, { useEffect, useState } from "react";
import PokemonPic from "./PokeData/PokemonPic";
import PokemonType from "./PokeData/PokemonTypes";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import "./Pokemon.css";
import { Box } from "@material-ui/core";

//container for individual pokemons

export default function Pokemon(props) {
  const [url] = useState(props.url);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonType, setPokemonType] = useState(null);

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokemon(data);
      setPokemonType(data.data.types);
    });
  }, [url]);

  // console.log(pokemon);
  if (!pokemon) {
    return <div></div>;
  }

  return (
    <Box container style={{ backgroundColor: "white" }}>
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
      {pokemonType && (
        <Grid container direction="row" justify="space-around">
          {pokemonType.map((type, index) => (
            <PokemonType
              onTypeClick={props.onTypeClick}
              type={type.type.name}
              key={2000 + pokemon.data.id * 10 + index}
            ></PokemonType>
          ))}
        </Grid>
      )}
    </Box>
  );
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
