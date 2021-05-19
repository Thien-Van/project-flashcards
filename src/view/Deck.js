import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useParams,
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";

import EditDeck from "../edit/EditDeck";
import StudyDeck from "../study/StudyDeck";
import AddCard from "../edit/AddCard";
import CardOverview from "./CardOverview";
import EditCard from "../edit/EditCard";
import { readDeck, readCard } from "../utils/api";

function Deck() {
  let location = useLocation();
  const history = useHistory();
  const { url } = useRouteMatch();
  const { deckId } = useParams();

  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({});
  const [cardId, setCardId] = useState(null);
  const [card, setCard] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    let signal = null;
    loadDeck();
    async function loadDeck() {
      try {
        signal = abortController.signal;
        const response = await readDeck(deckId, signal);
        setDeck(response);
        setCards(response.cards);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadDeck();
    return () => abortController.abort;
  }, [location]);

  useEffect(() => {
    if (cardId != null) {
      const abortController = new AbortController();
      let signal = null;
      loadCard();
      async function loadCard() {
        try {
          signal = abortController.signal;
          const response = await readCard(cardId, signal);
          setCard(response);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadCard();
      return () => abortController.abort;
    }
  }, [cardId]);

  const deleteDeck = () => {
    console.log("delete Deck");
  };

  const editCard = (id) => {
    console.log("idchange");
    setCardId(id);
    history.push(`${url}/cards/${id}/edit`);
  };

  const cardList = cards.map((card) => (
    <CardOverview
      editCard={editCard}
      key={card.id}
      front={card.front}
      back={card.back}
      id={card.id}
    />
  ));

  function DeckDisplay() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {deck.name}
            </li>
          </ol>
        </nav>
        <div>
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
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
        <StudyDeck deck={deck} />
      </Route>
      <Route path={`${url}/edit`}>
        <EditDeck deck={deck} />
      </Route>
      <Route path={`${url}/card/new`}>
        <AddCard deckId={deckId} />
      </Route>
      <Route path={`${url}/cards/:cardId/edit`}>
        <EditCard currentCard={card} deck={deckId} />
      </Route>
      <Route>
        <DeckDisplay />
      </Route>
    </Switch>
  );
}

export default Deck;
