import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { generateTexture } from "../utility/generateTexture";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  patternBackground: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "repeat",
    color: "black",
    position: "relative",
  },
}));

export default function IdBackground(props) {
  const [newText] = useState(props.id);
  const [newTexture] = useState(generateTexture(newText));
  const classes = useStyles();

  return (
    <Grid
      className={classes.patternBackground}
      style={{ backgroundImage: `url(${newTexture})` }}
    ></Grid>
  );
}
