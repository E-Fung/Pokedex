// import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import { AppBar, Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContextProvider from "./AppContext";

const RoutesEnum = {
  Home: "/",
  Pokemon: "/pokemon",
};

export default function App() {
  return (
    <div container className="app" direction="column">
      <main>
        <AppContextProvider>
          <Router>
            <AppBar position="sticky">
              <Toolbar style={{ minWidth: "100vw" }}></Toolbar>
            </AppBar>
            <Route path={`${RoutesEnum.Home}`} exact component={PokemonList} />
            <Route
              path={`${RoutesEnum.Pokemon}/:pokeName?`}
              component={PokemonDetail}
            />
          </Router>
        </AppContextProvider>
      </main>
    </div>
  );
}
