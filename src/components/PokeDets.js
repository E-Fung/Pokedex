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

export default function PokeDets() {
  const location = useLocation();
  const [url] = useState(location.state.url);
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data.data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  let pokeName = capFirstLetter(pokeData.name);

  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <PokePic index={pokeData.id} />
        </Grid>
      </Grid>
      <Typography variant="h5" align="center">
        {pokeName}
      </Typography>
      <Grid item xs={12}>
        <Container maxWidth="xs" fixed>
          <PokeStats pokeStats={pokeData.stats} />
        </Container>
      </Grid>
      <PokeMoves pokeMoves={pokeData.moves} />
      <PokeEvol url={pokeData.species.url} />
    </Grid>
  );
}
