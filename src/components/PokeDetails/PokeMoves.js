import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

export default function PokeMoves(props) {
  const [pokeMoves, setPokeMoves] = useState(props.pokeMoves);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        {pokeMoves.map((move, index) => (
          <Typography key={index}>{move.move.name}</Typography>
        ))}
      </Grid>
    </Grid>
  );
}
