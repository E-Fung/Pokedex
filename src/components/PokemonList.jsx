import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import PokemonPic from "./PokemonPic";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const totalPokemon = 898;
  let tempArray = new Array(totalPokemon);
  let tempCounter = totalPokemon;

  useEffect(() => {
    for (let index = 1; index <= totalPokemon; index++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${index}`;
      axios.get(url).then((data) => {
        //think of this code not running in the initial sequence
        tempArray[data.data.id - 1] = data;
        console.log(data.data.name);
        tempCounter--;
        if (!tempCounter) {
          setPokemonList(tempArray);
          console.log("Ready");
          // localStorage.setItem("pokemonJSON", JSON.stringify(tempArray)); //stores data in local files
          // console.log(JSON.parse(localStorage.getItem("pokemonJSON")));
        }
      });
    }
  }, []);

  if (!pokemonList) {
    // console.log("still loading");
    return <div>Still Loading</div>;
  }
  // console.log("rendering");
  // console.log(pokemonList);
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <div>
          <Pokemon pokemon={pokemon} key={pokemon.data.id}></Pokemon>
          <PokemonPic
            index={pokemon.data.id}
            key={pokemon.data.id + 1000}
          ></PokemonPic>
        </div>
      ))}
    </div>
  );
}
