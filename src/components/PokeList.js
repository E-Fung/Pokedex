import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Pokemon from "./Pokemon/Pokemon";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PokeList() {
  let totalPokemon = 20;
  const [pokemonList, setPokemonList] = useState(null);
  const [url] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}&offset=${0}`
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokemonList(data.data.results);
    });
  }, [url]);

  // async function handlePicClick(index) {
  //   console.log(index);
  //   history.push({
  //     pathname: "/pokemon",
  //     state: { name: displayList[index - 1].data },
  //   });
  // }

  async function handleTypeClick(type) {
    // if (type === "reset") {
    //   setDisplayList(pokemonList);
    //   return;
    // }
    // await setPokemonList(
    //   pokemonList.filter((tempPoke) =>
    //     tempPoke.data.types.some(
    //       (currPokemon) => currPokemon.type.name === type
    //     )
    //   )
    // );
    axios.get("https://pokeapi.co/api/v2/grass/1").then((data) => {
      console.log(data);
    });
    console.log("Button pressed");
  }

  if (!pokemonList) {
    return <div>loading</div>;
  }
  console.log(pokemonList);
  return (
    <Container maxWidth="md" fixed>
      <Grid
        container
        direction="row"
        style={{ backgroundColor: "pink", height: "100%" }}
      >
        {pokemonList.map((pokemon) => (
          <Pokemon url={pokemon.url} onTypeClick={handleTypeClick}></Pokemon>
        ))}
      </Grid>
    </Container>
  );
}
