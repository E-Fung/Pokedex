import React, { Component } from "react";
import "./App.css";
import PokemonListFC from "./components/PokemonListFC";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <PokemonListFC />
      </div>
    );
  }
}

export default App;
