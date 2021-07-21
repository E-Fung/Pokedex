import React from "react";
import "./App.css";
import { AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokeList from "./components/PokeList";

export default function App() {
  return (
    <div className="app" direction="column">
      <CssBaseline />
      <Router>
        {/* <AppBar position="sticky">
          <Toolbar style={{ minWidth: "100vw" }}></Toolbar>
        </AppBar> */}
        <main>
          <AppBar position="sticky">
            <Toolbar style={{ minWidth: "100vw", minHeight: "10vh" }}></Toolbar>
          </AppBar>
          <Route path={"/"} exact component={PokeList} />
        </main>
      </Router>
    </div>
  );
}
