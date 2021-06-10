import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [loading, setLoading] = useState(true);
  const totalPokemon = 5;
  let tempArray = new Array(totalPokemon);
  let tempCounter = totalPokemon;

  useEffect(() => {
    for (let index = 1; index <= totalPokemon; index++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${index}`;
      axios.get(url).then((data) => {
        //think of this code not running in the initial sequence
        tempArray[data.data.id - 1] = data;
        console.log("grabbing data");
        console.log(data.data.name);
        tempCounter--;
        if (!tempCounter) {
          setPokemonList(tempArray);
          setLoading(false);
          console.log("Ready");
        }
      });
    }
  }, []);

  if (loading) {
    console.log("loading");
    return <div>Loading...</div>;
  }
  if (!pokemonList) {
    console.log("still loading");
    return <div>Still Loading</div>;
  }
  console.log("rendering");
  console.log(pokemonList);
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <Pokemon pokemon={pokemon}></Pokemon>
      ))}
    </div>
  );
}
