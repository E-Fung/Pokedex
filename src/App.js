// import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import { AppBar, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContextProvider from "./AppContext";

const RoutesEnum = {
  Home: "/",
  Pokemon: "/pokemon-details",
};

export default function App() {
  return (
    <div container className="app" direction="column">
      <main>
        <AppContextProvider>
          <Router>
            {/* <AppBar position="sticky" style={{ minWidth: "100vw" }}>
              <Toolbar></Toolbar>
            </AppBar> */}
            <Route path={`${RoutesEnum.Home}`} exact component={PokemonList} />
            <Route path={RoutesEnum.Pokemon} component={PokemonDetail} />
          </Router>
        </AppContextProvider>
      </main>
    </div>
  );
}
