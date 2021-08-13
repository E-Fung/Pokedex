import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";

//takes in an array of types

const useStyles = makeStyles(() => ({
  fire: {
    backgroundColor: "#F08030", //rgb(240, 128, 48)
    color: "white",
  },
  grass: {
    backgroundColor: "#78C850", //rgb(120, 200, 80)
    color: "white",
  },
  ground: {
    backgroundColor: "#E0C068", //rgb(224, 192, 104)
    color: "white",
  },
  bug: {
    backgroundColor: "#A8B820", //rgb(168, 184, 32)
    color: "white",
  },
  dark: {
    backgroundColor: "#705848", //rgb(112, 88, 72)
    color: "white",
  },
  dragon: {
    backgroundColor: "#7038F8", //rgb(112, 56, 248)
    color: "white",
  },
  electric: {
    backgroundColor: "#F8D030", //rgb(248, 208, 48)
    color: "white",
  },
  fairy: {
    backgroundColor: "#EE99AC", //rgb(238, 153, 172)
    color: "white",
  },
  fighting: {
    backgroundColor: "#C03028", //rgb(192, 48, 40)
    color: "white",
  },
  flying: {
    backgroundColor: "#A890F0", //rgb(168, 144, 240)
    color: "white",
  },
  ghost: {
    backgroundColor: "#705898", //rgb(112, 88, 152)
    color: "white",
  },
  ice: {
    backgroundColor: "#98D8D8", //rgb(152, 216, 216)
    color: "white",
  },
  normal: {
    backgroundColor: "#A8A878", //rgb(168, 168, 120)
    color: "white",
  },
  poison: {
    backgroundColor: "#A040A0", //rgb(160, 64, 160)
    color: "white",
  },
  psychic: {
    backgroundColor: "#F85888", //rgb(248, 88, 136)
    color: "white",
  },
  rock: {
    backgroundColor: "#B8A038", //rgb(184, 160, 56)
    color: "white",
  },
  steel: {
    backgroundColor: "#B8B8D0", //rgb(184, 184, 208)
    color: "white",
  },
  water: {
    backgroundColor: "#6890F0", //rgb(104, 144, 240)
    color: "white",
  },
}));

export default function PokeTypes(props) {
  const classes = useStyles();
  const [types] = useState(props.types);

  if (!types) {
    return <div>loading type</div>;
  }

  return (
    <Grid container justifyContent="space-around">
      {types.map((type, index) => {
        return (
          <Button
            key={index}
            variant="contained"
            className={classes[type.type.name]}
            onClick={() => props.onTypeClick(type.type.name)}
            style={{ maxWidth: "80px", maxHeight: "20px" }}
          >
            {type.type.name}
          </Button>
        );
      })}
    </Grid>
  );
}
