import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Grid, Typography, Paper } from "@material-ui/core";
import PokePic from "./PokePic";
import PokeTypes from "./PokeTypes";
import { useHistory } from "react-router";
import { capFirstLetter } from "../../utility/utility";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      height: theme.spacing(37),
    },
  },
}));

const matchColor = (type) => {
  switch (type) {
    case "fire":
      return "rgb(240, 128, 48,0.35)";
    case "grass":
      return "rgb(120, 200, 80,0.35)";
    case "ground":
      return "rgb(224, 192, 104,0.35)";
    case "bug":
      return "rgb(168, 184, 32,0.35)";
    case "dark":
      return "rgb(112, 88, 72,0.35)";
    case "dragon":
      return "rgb(112, 56, 248,0.35)";
    case "electric":
      return "rgb(248, 208, 48,0.35)";
    case "fairy":
      return "rgb(238, 153, 172,0.35)";
    case "fighting":
      return "rgb(192, 48, 40,0.35)";
    case "flying":
      return "rgb(168, 144, 240,0.35)";
    case "ghost":
      return "rgb(112, 88, 152,0.35)";
    case "ice":
      return "rgb(152, 216, 216,0.35)";
    case "normal":
      return "rgb(168, 168, 120,0.35)";
    case "poison":
      return "rgb(160, 64, 160,0.35)";
    case "psychic":
      return "rgb(248, 88, 136,0.35)";
    case "rock":
      return "rgb(184, 160, 56,0.5)";
    case "steel":
      return "rgb(184, 184, 208,0.35)";
    case "water":
      return "rgb(104, 144, 240,0.35)";
    default:
      return "white";
  }
};

export default function Pokemon(props) {
  const [url] = useState(props.url);
  const [pokeData, setPokeData] = useState(null);
  const history = useHistory();
  const classes = useStyles();
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);

  const getColor = (types) => {
    setLeft(matchColor(types[0].type.name));
    if (types.length === 2) {
      setRight(matchColor(types[1].type.name));
    } else {
      setRight(matchColor(types[0].type.name));
    }
  };

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  let pokeName = capFirstLetter(pokeData.data.name);

  return (
    <Grid item xs={3} className={classes.root}>
      <Paper
        elevation={2}
        style={{
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Grid
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "4px",
            background: `linear-gradient( to right, ${left}, ${right})`,
          }}
        >
          <Grid
            style={{ position: "absolute", width: "100%", height: "100%" }}
            alignContent="center"
          >
            <Typography
              style={{
                position: "relative",
                color: "black", //rgb(255,255,255,0.6)
                fontSize: "80px",
                textAlign: "center",
                transform: "scaleX(1.5)",
                transform: "rotate(-45deg)",
                top: "50px",
              }}
            >
              #{pokeData.data.id.toString().padStart(3, "0")}
            </Typography>
          </Grid>

          <PokePic index={pokeData.data.id}></PokePic>
          <Typography
            variant="h5"
            align="center"
            style={{ marginBottom: "5px" }}
          >
            {pokeName}
          </Typography>
          <PokeTypes
            getColor={getColor}
            types={pokeData.data.types}
            onTypeClick={props.onTypeClick}
          ></PokeTypes>
        </Grid>
      </Paper>
    </Grid>
  );
}
