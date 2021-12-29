import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Nav from "./nav"
import Home from "./pages/home"
import Players from "./pages/items"
import AddPlayers from "./pages/add-item"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items" component={Players} />
          <Route path="/add-item" component={AddPlayers} />
        </Switch>
      </div>
    );
  }
}
