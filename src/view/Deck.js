import React from "react";
import EditDeck from "../edit/EditDeck";
import StudyDeck from "../study/StudyDeck";
import AddCard from "../edit/AddCard";
import { Switch, Route, useParams, Link } from "react-router-dom";

function Deck() {
  const { deckId } = useParams();

  const deleteDeck = () => {
    console.log("delete Deck");
  };

  return (
    <Switch>
      <Route path={`/decks/${deckId}/study`}>
        <StudyDeck />
      </Route>
      <Route path={`/decks/${deckId}/edit`}>
        <EditDeck />
      </Route>
      <Route path={`/decks/${deckId}/card/new`}>
        <AddCard />
      </Route>
      <Route path={`/decks/${deckId}`}>
        <div>
          <div>
            <h2>Deck View {deckId}</h2>
            <p>viewing deck right now</p>
            <Link
              className="btn btn-secondary m-1"
              to={`/decks/${deckId}/edit`}
            >
              Edit
            </Link>
            <Link className="btn btn-primary m-1" to={`/decks/${deckId}/study`}>
              Study
            </Link>
            <Link
              className="btn btn-primary m-1"
              to={`/decks/${deckId}/card/new`}
            >
              Add Cards
            </Link>
            <button className="btn btn-danger m-1" onClick={deleteDeck}>
              Delete
            </button>
          </div>
          <div>
            <h1>Cards</h1>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default Deck;
