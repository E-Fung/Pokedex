import React, { Component } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <PokemonList />
      </div>
    );
  }
}

export default App;
