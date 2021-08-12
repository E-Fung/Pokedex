import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

export default function PokeStats(props) {
  const [pokeStats, setPokeStats] = useState(props.pokeStats);
  return (
    <Grid container justifyContent="center">
      <Grid item>
        {pokeStats.map((stat, index) => (
          <Typography key={index}>
            {stat.stat.name} {stat.base_stat}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}
