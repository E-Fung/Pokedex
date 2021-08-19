import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  picture: { height: "100%", width: "100%", zIndex: "2" },
});

export default function PokePic(props) {
  const [url] = useState(`https://pokeapi.co/api/v2/pokemon/${props.index}`);
  const history = useHistory();
  const classes = useStyles();

  const handlePicClick = () => {
    history.push({
      pathname: `/Pokemon/Details/${props.index}`,
      state: { url },
    });
  };

  if (!props.index) {
    return <div>loading img...</div>;
  }
  let altIndex = props.index.toString().padStart(3, "0");

  return (
    <Grid container justifyContent="center">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${altIndex}.png`}
        alt="Pokemon Img"
        onClick={() => handlePicClick()}
        className={classes.picture}
      ></img>
    </Grid>
  );
}
