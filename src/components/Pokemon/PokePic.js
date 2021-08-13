import { Grid } from "@material-ui/core";
import React from "react";

export default function PokePic(props) {
  if (!props.index) {
    return <div>loading img...</div>;
  }
  let altIndex = props.index.toString().padStart(3, "0");

  return (
    <Grid container justifyContent="center">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${altIndex}.png`}
        alt="Pokemon Img"
        onClick={() => props.onPicClick(props.index)}
        style={{ height: "100%", width: "100%" }}
      ></img>
    </Grid>
  );
}
