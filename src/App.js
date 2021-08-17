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
        <Grid>
          <Grid
            container
            style={{
              // backgroundColor: "grey",
              backgroundImage:
                "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f132df58-e3ee-411d-bbe3-f6f6ce8e746f/db70h46-e3c95a32-8918-4e2b-92b8-3a200e29b321.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMzJkZjU4LWUzZWUtNDExZC1iYmUzLWY2ZjZjZThlNzQ2ZlwvZGI3MGg0Ni1lM2M5NWEzMi04OTE4LTRlMmItOTJiOC0zYTIwMGUyOWIzMjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PtJ-CiQfe5JoPXbhaJslDtn8_64xeZX7NW86LKybo2Q)",
              backgroundRepeat: "repeat",
              backgroundColor: "white",
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
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
        </Grid>
      </main>
    </div>
  );
}
