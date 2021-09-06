import React, { Component } from "react";
import Play from "./Pages/Play/Play";
import Home from "./Pages/Home/Home";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/watch" exact component={Play} />
        </Switch>
      </div>
    );
  }
}
