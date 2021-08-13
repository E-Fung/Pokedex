import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  CardMedia,
  Paper,
} from "@material-ui/core";
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

export default function Pokemon(props) {
  const [url] = useState(props.url);
  const [pokeData, setPokeData] = useState(null);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  const handlePicClick = (index) => {
    history.push({
      pathname: `/Pokemon/Details/${index}`,
      state: { url },
    });
  };

  let pokeName = capFirstLetter(pokeData.data.name);

  return (
    <Grid item xs={3} className={classes.root}>
      <Paper
        elevation={3}
        style={{
          background:
            "linear-gradient( to top right, rgb(240, 128, 48,0.35), white, rgb(240, 128, 48,0.35))",
        }}
      >
        <PokePic index={pokeData.data.id} onPicClick={handlePicClick}></PokePic>
        <Typography
          variant="body2"
          style={{ color: "grey", fontWeight: "bold" }}
        >
          #{pokeData.data.id.toString().padStart(3, "0")}
        </Typography>
        <Typography variant="h5" align="center" style={{ marginBottom: "5px" }}>
          {pokeName}
        </Typography>
        <PokeTypes
          types={pokeData.data.types}
          onTypeClick={props.onTypeClick}
        ></PokeTypes>
      </Paper>
    </Grid>
  );
}
