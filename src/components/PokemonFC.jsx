import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonFC(props) {
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
    let altIndex = index.toString().padStart(3, "0");
    return (
      <div>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${altIndex}.png`}
          alt={""}
        ></img>
        {pokeState.data.name}
      </div>
    );
  }
}

//Functional Components > Class Components ALWAYS
//Hooks > LifeCycle methods
