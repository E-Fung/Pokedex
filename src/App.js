import React, { useEffect, useState } from "react";
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
import { AppContextProvider } from "./AppContext";
import Background from "./components/Background";

export default function App() {
  let myRange = [...Array(898).keys()].map((i) => i + 1);
  const [currType, setCurrType] = useState("none");

  const handleBackground = (type) => {
    setCurrType(type);
  };

  console.log(currType);

  return (
    <div className="app" direction="column">
      <CssBaseline />
      <main>
        <AppContextProvider>
          <Router>
            <AppBar
              position="sticky"
              style={{
                minWidth: "100%",
                backgroundColor: "rgb(0,0,0,1)",
              }}
            >
              <Toolbar></Toolbar>
            </AppBar>
            <Container maxWidth="lg" fluid>
              <Container
                maxWidth="md"
                fluid
                style={{
                  backgroundColor: "rgb(0,0,0,1)",
                  padding: "15px",
                }}
              >
                <Route
                  path={"/"}
                  exact
                  onBackground={handleBackground}
                  component={PokeList}
                />
                {myRange.map((index) => (
                  <Route
                    path={`/Pokemon/Details/${index}`}
                    key={index}
                    component={PokeDets}
                  />
                ))}
              </Container>
            </Container>
            <Background />
          </Router>
        </AppContextProvider>
      </main>
    </div>
  );
}
