import React from "react";
import Button from "@material-ui/core/Button";
import "/home/ehhfung/Documents/pokedex/src/PokemonType.css";

export default function PokemonTypes(types) {
  return (
    <Button variant='contained' classes={grassType}>
      {types.types}
    </Button>
  );
}
