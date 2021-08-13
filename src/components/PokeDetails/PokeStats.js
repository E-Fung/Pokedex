import { Grid, Typography, LinearProgress } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

export default function PokeStats(props) {
  const [pokeStats, setPokeStats] = useState(props.pokeStats);
  const [hp] = useState(props.pokeStats.base_stat);

  useEffect(() => {}, []);
  console.log(hp);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        {pokeStats.map((stat, index) => (
          <>
            <Typography key={index}>
              {stat.stat.name} {stat.base_stat}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={stat.base_stat / 1.5}
              style={{ width: "100%" }}
            />
          </>
        ))}
      </Grid>
    </Grid>
  );
}
