import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "navy",
  },
});

export default function PokemonList() {
  const [pokemonList] = useState(null);
  const [displayList, setDisplayList] = useState(null);
  const totalPokemon = 12;
  const history = useHistory();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const classes = useStyles();

  async function handlePicClick(index) {
    // console.log("pushing history");
    history.push({
      pathname: "/pokemon-details",
      state: { pokeData: displayList[index - 1] },
    });
  }

  async function handleTypeClick(type) {
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
  }

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}&offset=${0}`;
    axios.get(url).then((data) => {
      setDisplayList(data.data.results);
    });
  }, []);

  if (!displayList) {
    return <div>Still Loading</div>;
  }

  return (
    <Box container display="flex" style={{ minWidth: "100vw" }}>
      <Grid classes={{ root: classes.root }} xl={3}></Grid>
      <Grid container xl={6} justify="space-around">
        {displayList.map((pokemon) => (
          <Grid container data-aos="flip-left" justify="center" xl={3}>
            <Pokemon
              url={pokemon.url}
              // key={pokemon.data.id}
              onTypeClick={handleTypeClick}
              onPicClick={handlePicClick}
            ></Pokemon>
          </Grid>
        ))}
      </Grid>
      <Grid xl={3} classes={{ root: classes.root }}></Grid>
    </Box>
  );
}
