import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PokePic from "../Pokemon/PokePic";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

export default function PokeEvol(props) {
  const history = useHistory;
  const [evolUrl, setEvolUrl] = useState(null);
  const [evolData, setEvolData] = useState(null);
  const [evolChain, setEvolChain] = useState(null);

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

  useEffect(() => {
    if (evolData) {
      let tempEvolData = evolData.chain;
      let tempEvolChain = [];
      tempEvolChain.push(
        Object.assign({}, tempEvolData.species, tempEvolData.evolution_details)
      );
      while (tempEvolData.evolves_to[0] != null) {
        tempEvolData = tempEvolData.evolves_to[0];
        tempEvolChain.push(
          Object.assign(
            {},
            tempEvolData.species,
            tempEvolData.evolution_details[0]
          )
        );
      }
      setEvolChain(tempEvolChain);
    }
  }, [evolData]);

  if (!evolChain) {
    return <></>;
  }

  // const handlePicClick = (index) => {
  //   history.push({
  //     pathname: `/Pokemon/Details/${index}`,
  //   });
  // };

  return (
    <Grid container>
      {evolChain.map((pokeStag, index) => (
        <PokePic
          key={index}
          index={pokeStag.url.slice(-4).match(/[0-9]/g).join("")}
          onPicClick={() => {}}
        />
      ))}
    </Grid>
  );
}
