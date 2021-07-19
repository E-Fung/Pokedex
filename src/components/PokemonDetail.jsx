import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import PokemonPic from "./Pokemon/PokeData/PokemonPic";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import getCards from "../pokemon-service";

export default function PokemonDetail() {
  const location = useLocation();
  const [pokemon, setPokemon] = useState({});

  // useEffect(() => {
  //   let url = location.state.pokeData.url;
  //   console.log(url);
  // axios.get(url).then((data) => {
  //   console.log("type", typeof data.data);
  //   setPokemon(data.data);
  //   console.log("Pokemon", pokemon);
  // });
  // }, []);

  function getPokeData(data) {
    console.log("get", data.data);
    setPokemon(data.data.name);
    console.log(pokemon);
  }

  // useEffect(() => {
  //   (async function () {
  //     const cardData = await axios.get(url)
  //     setPokemon(cardData)
  //     });

  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //   }())
  // }, [selectedSet])

  const fetchText = async () => {
    let url = location.state.pokeData.url;
    const response = await axios.get(url);
  };

  useEffect(() => {
    (async function () {
      const pokemonData = await getCards().then((data) => {
        console.log(data, "ethan is a penis");
      });
      console.log(pokemonData);
      setPokemon(pokemonData);
      console.log(pokemon);
    })();
  }, []);

  return <div>{pokemon && <h2>penis</h2>};</div>;
}
