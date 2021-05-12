import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import StudyDeck from "./StudyDeck";
import CreateDeck from "../decks/CreateDeck";
import { readDeck } from "../utils/api";

function Deck() {
  const { deckId } = useParams();
  const { url } = useRouteMatch();
  const [reading, setReading] = useState({});

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setReading(response);
    }

    loadDeck();
  }, []);

  const deckName = reading.name;
  const deckDesc = reading.description;
  const deckCards = reading.cards;

  // const cardOverview = deckCards.map((card) => {
  //   return (
  //     <div className="card">
  //       <p>{card.question}</p>
  //       <p>{card.answer}</p>
  //     </div>
  //   );
  // });

  function DeckScreen() {
    return (
      <>
        <h3>{deckName}</h3>
        <p>{deckDesc}</p>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-primary">Study</button>
        <button className="btn btn-primary">Add cards</button>
        <button className="btn btn-danger">Delete</button>
        <h1>Cards</h1>
        {/* <div>{cardOverview}</div> */}
      </>
    );
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deckName}
          </li>
        </ol>
      </nav>
      <Switch>
        <Route path={`${url}/study`}>
          <StudyDeck deckId={deckId} />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route>
          <DeckScreen />
        </Route>
      </Switch>
    </>
  );
}

export default Deck;
