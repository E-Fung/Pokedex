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
import Background from "./Background";

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
          <Grid style={{ minHeight: "100%", minWidth: "100%" }}>
            <Router>
              {/* <AppBar
              position="sticky"
              style={{
                minWidth: "100%",
                backgroundColor: "grey",
              }}
            >
              <Toolbar></Toolbar>
            </AppBar> */}
              <Container maxWidth="lg" fixed>
                <Container
                  maxWidth="md"
                  fixed
                  style={{
                    backgroundColor: "rgb(0,0,0,0.8)",
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
              <Background currType={currType} />
            </Router>
          </Grid>
        </AppContextProvider>
      </main>
    </div>
  );
}
