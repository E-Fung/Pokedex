import React from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeDets from "./components/PokeDets";

export default function App() {
  let myRange = [...Array(898).keys()].map((i) => i + 1);

  return (
    <div className="app" direction="column">
      <CssBaseline />
      <main>
        <Grid
          container
          style={{
            backgroundColor: "grey",
            height: "100%",
          }}
        >
          <Router>
            <AppBar
              position="sticky"
              style={{
                minWidth: "100%",
                backgroundColor: "grey",
              }}
            >
              <Toolbar></Toolbar>
            </AppBar>
            <Container maxWidth="lg" fixed style={{ backgroundColor: "white" }}>
              <Container maxWidth="md" fixed>
                <Route path={"/"} exact component={PokeList} />
                {myRange.map((index) => (
                  <Route
                    path={`/Pokemon/Details/${index}`}
                    key={index}
                    component={PokeDets}
                  />
                ))}
              </Container>
            </Container>
          </Router>
        </Grid>
      </main>
    </div>
  );
}
