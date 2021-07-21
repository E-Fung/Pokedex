import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Pokemon from "./Pokemon/Pokemon";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PokeList() {
  let totalPokemon = 20;
  const [pokemonList, setPokemonList] = useState(null);
  const [typeUrl, setTypeUrl] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [url] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}&offset=${0}`
  );

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    console.log("url");
    axios.get(url).then((data) => {
      setPokemonList(data.data.results);
    });
  }, [url]);

  async function updateList(update) {
    await setPokemonList(update);
  }

  useEffect(() => {
    console.log("Typeurl");
    if (!typeUrl) return;
    let tempList = [];
    axios.get(typeUrl).then((data) => {
      data.data.pokemon
        .slice(0, 21)
        .map((pokemon) => tempList.push(pokemon.pokemon));
      updateList(tempList);
      setSubmitted(true);
      console.log(pokemonList);
      // setPokemonList(tempList);
    });
  }, [typeUrl]);

  useEffect(() => {
    if (submitted) {
      console.log("submitted", pokemonList);
      setSubmitted(false);
    }
  }, [submitted]);

  // async function handlePicClick(index) {
  //   console.log(index);
  //   history.push({
  //     pathname: "/pokemon",
  //     state: { name: displayList[index - 1].data },
  //   });
  // }

  function handleTypeClick(type) {
    setTypeUrl(`https://pokeapi.co/api/v2/type/${type}`);
  }

  if (!pokemonList) {
    return <div>loading</div>;
  }

  console.log("list", pokemonList);

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
