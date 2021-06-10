import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Evolution(props) {
  const [evolution, setEvolution] = useState(null);
  const [index] = useState(props.index);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/evolution-chain/${index}`;
    axios.get(url).then((data) => {
      setEvolution(data);
    });
  }, [index]); //if things in this array are changed, things will be rendered again
  return <div></div>;

  // console.log(evolution);
}

//{<something false> %% <code you want to run>},if something false really is false, second part wont be run
