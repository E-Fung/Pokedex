import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PokeEvol(props) {
  const [evolUrl, setEvolUrl] = useState(null);
  const [evolData, setEvolData] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((data) => {
      setEvolUrl(data.data.evolution_chain.url);
    });
  });

  useEffect(() => {
    if (evolUrl) {
      axios.get(evolUrl).then((data) => {
        setEvolData(data.data);
      });
    }
  }, [evolUrl]);

  if (evolData) {
    console.log(evolData.chain);
  }
  return <div></div>;
}
