import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useAppContext } from "../AppContext";

export default function Topbar() {
  const { setCurrType } = useAppContext();

  const onReset = () => {
    setCurrType("none");
  };

  return (
    <Grid>
      <Button
        onClick={() => onReset()}
        style={{ color: "white", backgroundColor: "red" }}
      >
        Reset
      </Button>
    </Grid>
  );
}
