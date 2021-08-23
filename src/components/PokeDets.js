import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PokePic from "./Pokemon/PokePic";
import { Typography, Grid, Container } from "@material-ui/core";
import { capFirstLetter } from "../utility/utility";
import PokeStats from "./PokeDetails/PokeStats";
import PokeEvol from "./PokeDetails/PokeEvol";
import PokeMoves from "./PokeDetails/PokeMoves";
import PokeTypes from "./Pokemon/PokeTypes";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  whiteText: {
    color: "white",
  },
}));

export default function PokeDets() {
  const location = useLocation();
  const [url] = useState(location.state.url);
  const [pokeData, setPokeData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data.data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  let pokeName = capFirstLetter(pokeData.name);
  // console.log(pokeData);

  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center">
        <Grid
          item
          xs={6}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h5" align="center">
            {pokeName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-evenly">
        <Grid
          item
          xs={5}
          style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          <PokePic index={pokeData.id} />
        </Grid>
        <Grid
          item
          xs={5}
          style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          <Typography></Typography>
          <img src={pokeData.sprites.front_default} alt="front_default" />
          <img src={pokeData.sprites.back_default} alt="back_default" />
          <img src={pokeData.sprites.front_shiny} alt="front_shiny" />
          <img src={pokeData.sprites.back_shiny} alt="back_shiny" />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="xs" fixed>
          <PokeStats pokeStats={pokeData.stats} />
        </Container>
      </Grid>
      <PokeMoves moves={pokeData.moves} />
      <PokeEvol url={pokeData.species.url} />
    </Grid>
  );
}
