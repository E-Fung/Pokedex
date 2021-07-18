import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  fire: {
    backgroundColor: "#F08030",
    color: "white",
  },
  grass: {
    backgroundColor: "#78C850",
    color: "white",
  },
  ground: {
    backgroundColor: "#E0C068",
    color: "white",
  },
  bug: {
    backgroundColor: "#A8B820",
    color: "white",
  },
  dark: {
    backgroundColor: "#705848",
    color: "white",
  },
  dragon: {
    backgroundColor: "#7038F8",
    color: "white",
  },
  electric: {
    backgroundColor: "#F8D030",
    color: "white",
  },
  fairy: {
    backgroundColor: "#EE99AC",
    color: "white",
  },
  fighting: {
    backgroundColor: "#C03028",
    color: "white",
  },
  flying: {
    backgroundColor: "#A890F0",
    color: "white",
  },
  ghost: {
    backgroundColor: "#705898",
    color: "white",
  },
  ice: {
    backgroundColor: "#98D8D8",
    color: "white",
  },
  normal: {
    backgroundColor: "#A8A878",
    color: "white",
  },
  poison: {
    backgroundColor: "#A040A0",
    color: "white",
  },
  psychic: {
    backgroundColor: "#F85888",
    color: "white",
  },
  rock: {
    backgroundColor: "#B8A038",
    color: "white",
  },
  steel: {
    backgroundColor: "#B8B8D0",
    color: "white",
  },
  water: {
    backgroundColor: "#6890F0",
    color: "white",
  },
}));

export default function PokemonTypes(props) {
  const [type] = useState(props.type);

  //useState returns an array
  //type is first element in the array (index[0])
  //setType is second(last) element in the array

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes[type]}
      onClick={() => props.onTypeClick(type)}
    >
      {type}
    </Button>
  );
}
