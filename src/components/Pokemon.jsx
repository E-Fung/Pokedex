import React, { Component } from "react";

class Pokemon extends Component {
  state = { pokemon: null, index: 0 };

  async componentDidMount() {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.props.index}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ pokemon: data });
    console.log(this.state.pokemon);
  }

  render() {
    let index = this.state.index;
    index.toString();
    while (index.length < 4) {
      console.log("length", index);
      index.padStart(1, "0");
    }
    // console.log(index);
    return (
      <div>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'></img>
      </div>
    );
  }
}

export default Pokemon;

//Convert this to Functional Component
//
