import React, { useState } from "react";
import "./App.css";
import { AppBar, Toolbar, CssBaseline, Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeDets from "./components/PokeDets";
import { AppContextProvider } from "./AppContext";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appbar: {
    minWidth: "100%",
  },
  container: {
    backgroundColor: "white",
    padding: "15px",
    borderEndEndRadius: "10px",
    borderEndStartRadius: "10px",
  },
}));

export default function App() {
  let myRange = [...Array(898).keys()].map((i) => i + 1);
  const [setCurrType] = useState("none");
  const classes = useStyles();

  const handleBackground = (type) => {
    setCurrType(type);
  };

  return (
    <div className="app" direction="column">
      <CssBaseline />
      <main>
        <AppContextProvider>
          <Router>
            <AppBar position="sticky" className={classes.appbar}>
              <Toolbar></Toolbar>
            </AppBar>
            <Container maxWidth="lg">
              <Container maxWidth="md" className={classes.container}>
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
