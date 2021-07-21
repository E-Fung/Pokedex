import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@material-ui/core";
import PokePic from "./PokePic";
import PokeTypes from "./PokeTypes";

export default function Pokemon(props) {
  const [url] = useState(props.url);
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  return (
    <Grid xs={3}>
      <Container>
        <PokePic index={pokeData.data.id}></PokePic>
        <Typography variant="h5" align="center">
          {pokeData.data.name}{" "}
        </Typography>
        <PokeTypes types={pokeData.data.types}></PokeTypes>
      </Container>
    </Grid>
  );
}
