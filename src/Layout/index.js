import React from "react";
import { Route, Switch } from "react-router";

import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../view/Home";
import CreateDeck from "../edit/CreateDeck";
import Deck from "../view/Deck";

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
