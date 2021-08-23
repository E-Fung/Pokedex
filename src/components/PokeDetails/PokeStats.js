import { Grid, Typography, LinearProgress } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { capFirstLetter } from "../../utility/utility";

export default function PokeStats(props) {
  const [pokeStats] = useState(props.pokeStats);

  useEffect(() => {}, []);

  return (
    <Grid container justifyContent="center">
      {pokeStats.map((stat, index) => (
        <Grid item key={index + 2000} xs={12}>
          <Typography key={index} style={{ color: "white" }}>
            {capFirstLetter(stat.stat.name)} {stat.base_stat}
          </Typography>
          <LinearProgress
            key={index + 1000}
            variant="determinate"
            value={stat.base_stat / 1.5}
            style={{ width: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
