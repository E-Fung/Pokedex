import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, Container, Grid, Typography } from "@material-ui/core";
import PokePic from "./PokePic";
import PokeTypes from "./PokeTypes";
import { useHistory } from "react-router";
import { capFirstLetter } from "../../utility/utility";

export default function Pokemon(props) {
  const [url] = useState(props.url);
  const [pokeData, setPokeData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokeData(data);
    });
  }, [url]);

  if (!pokeData) {
    return <div>loading pokemon</div>;
  }

  const handlePicClick = (index) => {
    history.push({
      pathname: `/Pokemon/Details/${index}`,
      state: { url },
    });
  };

  let pokeName = capFirstLetter(pokeData.data.name);

  return (
    <Grid item xs={3}>
      <Card>
        <Box border={1} borderRadius={16} style={{ backgroundColor: "white" }}>
          <Container>
            <PokePic
              index={pokeData.data.id}
              onPicClick={handlePicClick}
            ></PokePic>
            <Typography variant="h5" align="center">
              {pokeName}
            </Typography>
            <PokeTypes
              types={pokeData.data.types}
              onTypeClick={props.onTypeClick}
            ></PokeTypes>
          </Container>
        </Box>
      </Card>
    </Grid>
  );
}
