import React, { Component } from "react";
// import Pokemon from "./Pokemon";
import PokemonFC from "./PokemonFC";

class PokemonList extends Component {
  state = {};

  render() {
    return (
      <div>
        <PokemonFC index={1}></PokemonFC>
        <PokemonFC index={2}></PokemonFC>
        <PokemonFC index={3}></PokemonFC>
      </div>
    );
  }
}

export default PokemonList;
