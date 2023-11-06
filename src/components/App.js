import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, actors, directors } from "../data"; // Import your data

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          path="/movies"
          render={() => <Movies movies={movies} />}
        />
        <Route
          path="/directors"
          render={() => <Directors directors={directors} />}
        />
        <Route
          path="/actors"
          render={() => <Actors actors={actors} />}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
