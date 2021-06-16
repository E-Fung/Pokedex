import React, { useState } from "react";
import Button from "@material-ui/core/Button";
// import "/home/ehhfung/Documents/pokedex/src/PokemonType.css";
// import { createMuiTheme } from "@material-ui/core/styles";

// const grassType = createMuiTheme({
//   palette: {
//     primary: {
//       main: #78C850,
//     },
//   },
// });

export default function PokemonTypes(props) {
  return (
    <Button variant='contained' onClick={() => props.onTypeClick(props.types)}>
      {props.types}
    </Button>
  );
}
