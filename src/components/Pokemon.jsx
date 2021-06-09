import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonPic from "./PokemonPic";

export default function Pokemon(props) {
  const [pokeState, setPokeState] = useState(null);
  const [index, setIndex] = useState(props.index);

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
    console.log(index);
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
