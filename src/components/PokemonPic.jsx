import React from "react";

export default function PokemonPic(props) {
  if (!props.index) {
    return <div>loading img...</div>;
  }
  let altIndex = props.index.toString().padStart(3, "0");
  return (
    <div>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${altIndex}.png`}
        alt='Pokemon Img'
      ></img>
    </div>
  );
}
