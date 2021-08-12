import React from "react";
import "./App.css";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeDets from "./components/PokeDets";

export default function App() {
  let myRange = [...Array(898).keys()].map((i) => i + 1);

  return (
    <div className="app" direction="column">
      <CssBaseline />
      <main>
        <Router>
          <AppBar position="sticky">
            <Toolbar style={{ minWidth: "100%", minHeight: "10vh" }}></Toolbar>
          </AppBar>
          <Route path={"/"} exact component={PokeList} />
          {myRange.map((index) => (
            <Route
              path={`/Pokemon/Details/${index}`}
              key={index}
              component={PokeDets}
            />
          ))}
        </Router>
      </main>
    </div>
  );
}
