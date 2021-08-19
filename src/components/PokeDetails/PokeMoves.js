import React from "react";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { capFirstLetter } from "../../utility/utility";

export default function PokeMoves(props) {
  const [pokeMoves] = useState(props.pokeMoves);
  // console.log(pokeMoves);
  return (
    <Grid container justifyContent="center">
      <Grid item>
        {pokeMoves.map((move, index) => (
          <Typography key={index}>{capFirstLetter(move.move.name)}</Typography>
        ))}
      </Grid>
    </Grid>
  );
}
