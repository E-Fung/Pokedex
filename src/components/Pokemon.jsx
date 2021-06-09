import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonPic from "./PokemonPic";

//container for individual pokemons

export default function Pokemon(props) {
  const [pokeState, setPokeState] = useState(null);
  const [index] = useState(props.index);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    axios.get(url).then((data) => {
      setPokeState(data);
    });
  }, [index]);

  if (!pokeState) {
    return <div>Loading...</div>;
  } else {
    console.log(pokeState.data);
    return (
      <div>
        <PokemonPic index={index}></PokemonPic>
        {pokeState.data.name}
      </div>
    );
  }
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
