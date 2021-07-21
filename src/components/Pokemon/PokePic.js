import { Grid } from "@material-ui/core";
import React from "react";

export default function PokePic({ index, onPicClick }) {
  if (!index) {
    return <div>loading img...</div>;
  }
  let altIndex = index.toString().padStart(3, "0");

  return (
    <Grid container justifyContent="center">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${altIndex}.png`}
        alt="Pokemon Img"
        onClick={() => onPicClick(index)}
      ></img>
    </Grid>
  );
}
