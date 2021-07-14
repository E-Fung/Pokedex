import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="app">
        <PokemonList />
      </div>
    </ThemeProvider>
  );
}
