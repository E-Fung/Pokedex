import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Pokemon from "./Pokemon/Pokemon";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PokeList() {
  let totalPokemon = 100;
  const [pokemonList, setPokemonList] = useState(null);
  const [typeUrl, setTypeUrl] = useState(null);
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

  useEffect(() => {
    if (!typeUrl) return;
    let tempList = [];
    axios.get(typeUrl).then((data) => {
      data.data.pokemon
        .slice(0, totalPokemon)
        .map((pokemon) => tempList.push(pokemon.pokemon));
      tempList = tempList.filter(
        (pokemon) => pokemon.url.slice(-7).match(/[0-9]/g).join("") < 899
      );
      setPokemonList(tempList);
    });
  }, [typeUrl, totalPokemon]);

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

  return (
    <Grid container direction="row" style={{ height: "100%" }}>
      {pokemonList.map((pokemon) => (
        <Pokemon
          url={pokemon.url}
          key={pokemon.url.slice(-5).match(/[0-9]/g)}
          onTypeClick={handleTypeClick}
        ></Pokemon>
      ))}
    </Grid>
  );
}
