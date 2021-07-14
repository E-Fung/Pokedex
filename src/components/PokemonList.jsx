import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import AOS from "aos";
import "aos/dist/aos.css";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [displayList, setDisplayList] = useState(null);
  const totalPokemon = 10;

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  async function handleTypeClick(type) {
    // let tempPoke = pokemonList[0];
    // console.log(
    //   tempPoke.data.types.some(
    //     (currPokemon) => currPokemon.tget npmlsget npmype.name === "water"
    //   )
    // );
    if (type === "reset") {
      setDisplayList(pokemonList);
      return;
    }
    await setDisplayList(
      pokemonList.filter((tempPoke) =>
        tempPoke.data.types.some(
          (currPokemon) => currPokemon.type.name === type
        )
      )
    );
    // console.log("Updated List:", displayList);
    // console.log("Pokemons of type: ", type, " ");
    // displayList.map((pokemon) => console.log(pokemon.data.name));
  }

  useEffect(() => {
    let tempArray = new Array(totalPokemon);
    let tempCounter = totalPokemon;
    for (let index = 1; index <= totalPokemon; index++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${index}`;
      axios.get(url).then((data) => {
        //think of this code not running in the initial sequence
        tempArray[data.data.id - 1] = data;
        // console.log(data.data.name);
        tempCounter--;
        if (!tempCounter) {
          setPokemonList(tempArray);
          setDisplayList(tempArray);
          // console.log("Ready");
          // localStorage.setItem("pokemonJSON", JSON.stringify(tempArray)); //stores data in local files
          // console.log(JSON.parse(localStorage.getItem("pokemonJSON")));
        }
      });
    }
  }, []);

  if (!displayList) {
    // console.log("still loading");
    return <div>Still Loading</div>;
  }

  // console.log("rendering");
  // console.log(pokemonList);
  console.log("Showing ", displayList.length, " pokemons");
  console.log("rendering", displayList);
  return (
    <Box display="flex" direction="row" spacing={3} width="100%">
      {/* <Button variant="contained" onClick={() => handleTypeClick("reset")}>
        Reset
      </Button> */}
      <Grid xl={1}></Grid>
      <Grid
        container
        display="flex"
        spacing={4}
        direction="row"
        justify="flex-start"
        align="flex-end"
        style={{ backgroundColor: "white", height: "100%", width: "100%" }}
        xl={10}
      >
        {displayList.map((pokemon) => (
          <Grid
            container
            style={{ backgroundColor: "black" }}
            data-aos="flip-left"
            direction="row"
            xs={3}
          >
            <Pokemon
              pokemon={pokemon}
              key={pokemon.data.id}
              onTypeClick={handleTypeClick}
            ></Pokemon>
          </Grid>
        ))}
      </Grid>
      <Grid xl={1}></Grid>
    </Box>
  );
}
