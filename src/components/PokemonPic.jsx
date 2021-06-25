import React from "react";
import axios from "axios";


export default function PokemonPic({ index }) {
  if (!index) {
    return <div>loading img...</div>;
  }
  let altIndex = index.toString().padStart(3, "0");

  return (
    <img
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${altIndex}.png`}
      alt='Pokemon Img'
    ></img>
  );
}
