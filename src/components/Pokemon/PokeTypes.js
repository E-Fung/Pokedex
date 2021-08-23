import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";
import { capFirstLetter } from "../../utility/utility";

const useStyles = makeStyles(() => ({
  fire: {
    backgroundColor: "rgb(240, 128, 48)",
    color: "white",
  },
  grass: {
    backgroundColor: "rgb(120, 200, 80)",
    color: "black",
  },
  bug: {
    backgroundColor: "rgb(168, 184, 32)",
    color: "white",
  },
  dark: {
    backgroundColor: "rgb(112, 88, 72)",
    color: "white",
  },
  dragon: {
    backgroundColor: "rgb(112, 56, 248)",
    color: "white",
  },
  electric: {
    backgroundColor: "rgb(248, 208, 48)",
    color: "black",
  },
  fairy: {
    backgroundColor: "rgb(238, 153, 172)",
    color: "white",
  },
  fighting: {
    backgroundColor: "rgb(192, 48, 40)",
    color: "white",
  },
  flying: {
    backgroundColor: "rgb(168, 144, 240)",
    color: "white",
  },
  ghost: {
    backgroundColor: "rgb(112, 88, 152)",
    color: "white",
  },
  ground: {
    backgroundColor: "rgb(224, 192, 104)",
    color: "black",
  },
  ice: {
    backgroundColor: "rgb(152, 216, 216)",
    color: "black",
  },
  normal: {
    backgroundColor: "rgb(168, 168, 120)",
    color: "white",
  },
  poison: {
    backgroundColor: "rgb(160, 64, 160)",
    color: "white",
  },
  psychic: {
    backgroundColor: "rgb(248, 88, 136)",
    color: "white",
  },
  rock: {
    backgroundColor: "rgb(184, 160, 56)",
    color: "white",
  },
  steel: {
    backgroundColor: "rgb(184, 184, 208)",
    color: "black",
  },
  water: {
    backgroundColor: "rgb(104, 144, 240)",
    color: "white",
  },
  bold: {
    fontWeight: "bold",
  },
  typeButton: {
    maxWidth: "80px",
    maxHeight: "20px",
    textTransform: "none",
  },
}));

export default function PokeTypes(props) {
  const classes = useStyles();
  const [types] = useState(props.types);

  useEffect(() => {
    props.getColor(types);
  }, []);

  if (!types) {
    return <div>loading type(s)</div>;
  }

  return (
    <Grid container justifyContent="space-around">
      {types.map((type, index) => {
        return (
          <Button
            key={index}
            variant="contained"
            className={`${classes[type.type.name]} ${classes.typeButton}`}
            onClick={() => props.onTypeClick(type.type.name)}
          >
            {capFirstLetter(type.type.name)}
          </Button>
        );
      })}
    </Grid>
  );
}
