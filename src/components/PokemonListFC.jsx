import React, { useState, useEffect } from "react";
import PokemonFC from "./PokemonFC";

export default function PokemonListFC() {
  return (
    <div>
      <PokemonFC index={1}></PokemonFC>
      <PokemonFC index={2}></PokemonFC>
      <PokemonFC index={3}></PokemonFC>
    </div>
  );
}
