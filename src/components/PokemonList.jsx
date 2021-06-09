import React from "react";
import Pokemon from "./Pokemon";

export default function PokemonList() {
  let myArray = Array.from({ length: 7 }, (_, i) => i + 1);
  return (
    <div>
      {myArray.map((index) => (
        <Pokemon index={index} key={index}></Pokemon>
      ))}
    </div>
  );
}
