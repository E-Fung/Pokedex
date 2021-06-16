import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [displayList, setDisplayList] = useState(null);
  const totalPokemon = 10;
  let tempArray = new Array(totalPokemon);
  let tempCounter = totalPokemon;

  function handleTypeClick(type) {
    // let tempPoke = pokemonList[0];
    // console.log(
    //   tempPoke.data.types.some(
    //     (currPokemon) => currPokemon.type.name === "water"
    //   )
    // );
    if (type === "reset") {
      setDisplayList(pokemonList);
      return;
    }

    let ppp = pokemonList.filter((tempPoke) =>
      tempPoke.data.types.some((currPokemon) => currPokemon.type.name === type)
    );
    setDisplayList([...ppp]);
    console.log(ppp);
    console.log(displayList);
    console.log("Pokemons of type: ", type, " ");
    ppp.map((pokemon) => console.log(pokemon.data.name));
    // let tempList = tempArray.filter(type=>type);
  }

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
          setDisplayList(tempArray);
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
        <Pokemon
          pokemon={pokemon}
          key={pokemon.data.id}
          onTypeClick={handleTypeClick}
        ></Pokemon>
      ))}
    </div>
  );
}
