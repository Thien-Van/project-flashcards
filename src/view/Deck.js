import React from "react";
import {
  Switch,
  Route,
  useParams,
  Link,
  useRouteMatch,
} from "react-router-dom";

import EditDeck from "../edit/EditDeck";
import StudyDeck from "../study/StudyDeck";
import AddCard from "../edit/AddCard";
import CardOverview from "./CardOverview";
import EditCard from "../edit/EditCard";

function Deck() {
  const { url } = useRouteMatch();
  const { deckId } = useParams();

  const cards = [
    { id: "1", front: "Front 1", back: "Back 1" },
    { id: "2", front: "Front 2", back: "Back 2" },
    { id: "3", front: "Front 3", back: "Back 3" },
    { id: "4", front: "Front 4", back: "Back 4" },
  ];

  const deleteDeck = () => {
    console.log("delete Deck");
  };

  const deleteCard = () => {
    console.log("delete Card");
  };

  const cardList = cards.map((card) => (
    <CardOverview
      deleteDeck={deleteCard}
      key={card.id}
      front={card.front}
      back={card.back}
      id={card.id}
    />
  ));

  function DeckDisplay() {
    return (
      <div>
        <div>
          <h3>Deck View {deckId}</h3>
          <p>viewing deck right now</p>
          <Link className="btn btn-secondary m-1" to={`/decks/${deckId}/edit`}>
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
        <div className="mt-5">
          <h1>Cards</h1>
          {cardList}
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path={`${url}/study`}>
        <StudyDeck />
      </Route>
      <Route path={`${url}/edit`}>
        <EditDeck />
      </Route>
      <Route path={`${url}/card/new`}>
        <AddCard deckId={deckId} />
      </Route>
      <Route path={`${url}/cards/:cardId/edit`}>
        <EditCard deckId={deckId} />
      </Route>
      <Route path={`${url}`}>
        <DeckDisplay />
      </Route>
    </Switch>
  );
}

export default Deck;
