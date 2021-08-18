import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Grid, Typography, Paper } from "@material-ui/core";
import PokePic from "./PokePic";
import PokeTypes from "./PokeTypes";
import { useHistory } from "react-router";
import { capFirstLetter } from "../../utility/utility";
import { matchColor } from "../../utility/utility";
import IdBackground from "../IdBackground";

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
}));

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
          {/* <Grid
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
          </Grid> */}
          <Grid
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              paddingBottom: "40%",
            }}
          >
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
