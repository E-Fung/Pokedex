import React, { useEffect } from "react";
import Pokemon from "./Pokemon/Pokemon";
import PokemonPic from "./Pokemon/PokeData/PokemonPic";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";

export default function PokemonDetail({ name }) {
  // const { pokeIndex } = useAppContext();
  // useEffect(() => console.log(pokeIndex));
  const location = useLocation();
  useEffect(() => console.log(location.state.name.name), []);
  return (
    <div>
      <PokemonPic index={2}></PokemonPic>
    </div>
  );
}
