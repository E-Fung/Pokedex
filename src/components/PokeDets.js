import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PokePic from "./Pokemon/PokePic";
import { Typography } from "@material-ui/core";
import { capFirstLetter } from "../utility/utility";
import PokeStats from "./PokeDetails/PokeStats";
import PokeEvol from "./PokeDetails/PokeEvol";
import PokeMoves from "./PokeDetails/PokeMoves";

export default function PokeDets() {
  const location = useLocation();
  const [url] = useState(location.state.url);
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data.data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  let pokeName = capFirstLetter(pokeData.name);
  console.log(pokeData);

  return (
    <>
      <PokePic index={pokeData.id} />
      <Typography variant="h5" align="center">
        {pokeName}
      </Typography>
      <PokeStats pokeStats={pokeData.stats} />
      <PokeMoves pokeMoves={pokeData.moves} />
      <PokeEvol url={pokeData.species.url} z />
    </>
  );
}
