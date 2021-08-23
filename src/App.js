import React from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Grid,
} from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import PokeDets from "./components/PokeDets";
import { AppContextProvider } from "./AppContext";
import Background from "./components/Background";
import { makeStyles } from "@material-ui/core";
import Topbar from "./TopBar/Topbar";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const useStyles = makeStyles(() => ({
  appbar: {
    minWidth: "100%",
  },
  container: {
    backgroundColor: "rgb(0,0,0,0.8)",
    padding: "15px",
    borderEndEndRadius: "10px",
    borderEndStartRadius: "10px",
  },
}));

export default function App() {
  let myRange = [...Array(898).keys()].map((i) => i + 1);
  const classes = useStyles();

  return (
    <div className="app" direction="column">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <AppContextProvider>
            <Router>
              <Grid style={{ position: "relative" }}>
                <AppBar position="sticky" className={classes.appbar}>
                  <Toolbar>
                    <Topbar />
                  </Toolbar>
                </AppBar>
                <Container maxWidth="lg">
                  <Container maxWidth="md" className={classes.container}>
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
                <Background />
              </Grid>
            </Router>
          </AppContextProvider>
        </main>
      </ThemeProvider>
    </div>
  );
}
