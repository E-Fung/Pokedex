import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Grid, Typography, Paper } from "@material-ui/core";
import PokePic from "./PokePic";
import PokeTypes from "./PokeTypes";
import { capFirstLetter } from "../../utility/utility";
import { matchColor } from "../../utility/utility";
import IdBackground from "../IdBackground";
import { Grow } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      height: theme.spacing(37),
      width: theme.spacing(37),
    },
  },
  card: {
    backgroundColor: "white",
    position: "relative",
  },
  pokeBounce: {
    animation: `$bounce 300ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0%)",
    },
    "50%": {
      transform: "translateY(-1%)",
    },
    "100%": {
      transform: "translateY(0%)",
    },
  },
  gradient: {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
  },
  textPattern: {
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingBottom: "40%",
  },
}));

export default function Pokemon(props) {
  const [url] = useState(props.url);
  const [pokeData, setPokeData] = useState(null);
  const classes = useStyles();
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [hover, setHover] = useState(false);

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
      <Grow in={true}>
        <Paper
          elevation={2}
          className={clsx({
            [classes.card]: true,
            [classes.pokeBounce]: hover,
          })}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Grid
            className={classes.gradient}
            style={{
              background: `linear-gradient( to right, ${left}, ${right})`,
            }}
          >
            <Grid className={classes.textPattern}>
              <IdBackground
                id={` #${pokeData.data.id.toString().padStart(3, "0")}`}
              />
            </Grid>
            <PokePic index={pokeData.data.id}></PokePic>
            <Typography
              variant="h5"
              align="center"
              style={{ marginBottom: "5px" }}
            >
              {capFirstLetter(pokeName)}
            </Typography>
            <PokeTypes
              getColor={getColor}
              types={pokeData.data.types}
              onTypeClick={props.onTypeClick}
            ></PokeTypes>
          </Grid>
        </Paper>
      </Grow>
    </Grid>
  );
}
