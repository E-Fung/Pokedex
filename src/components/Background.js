import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { matchColor } from "../utility/utility";
import { useAppContext } from "../AppContext";

export default function Background(props) {
  const { currType } = useAppContext();

  return (
    <Grid
      style={{
        backgroundImage:
          "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f132df58-e3ee-411d-bbe3-f6f6ce8e746f/db70h46-e3c95a32-8918-4e2b-92b8-3a200e29b321.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMzJkZjU4LWUzZWUtNDExZC1iYmUzLWY2ZjZjZThlNzQ2ZlwvZGI3MGg0Ni1lM2M5NWEzMi04OTE4LTRlMmItOTJiOC0zYTIwMGUyOWIzMjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PtJ-CiQfe5JoPXbhaJslDtn8_64xeZX7NW86LKybo2Q)",
        backgroundRepeat: "repeat",
        backgroundColor: matchColor(currType),
        height: "1000%",
        minWidth: "100%",
        position: "absolute",
        top: "0",
        zIndex: "-1",
      }}
    />
  );
}
