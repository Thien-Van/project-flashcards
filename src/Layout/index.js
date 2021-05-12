import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import AllDecks from "../decks/AllDecks";
import Deck from "../decks/Deck";
import { Route, Switch } from "react-router";

function Layout() {
  return (
    <div className="container">
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            <AllDecks />
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
