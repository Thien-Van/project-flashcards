import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { listDecks } from "../utils/api";
import DeckOverview from "./DeckOverview";

function Home() {
  let location = useLocation();
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    console.log("homechange");
    const abortController = new AbortController();
    let signal = null;
    loadDecks();
    async function loadDecks() {
      try {
        signal = abortController.signal;
        const response = await listDecks(signal);
        setDecks(response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadDecks();
    return () => abortController.abort;
  }, [location]);

  const deckList = decks.map((deck) => (
    <DeckOverview
      cardNum={deck.cards.length}
      title={deck.name}
      description={deck.description}
      id={deck.id}
      key={deck.id}
    />
  ));

  return (
    <div>
      <a className="btn btn-secondary" href="/decks/new">
        Create Deck
      </a>
      <div>{deckList}</div>
    </div>
  );
}

export default Home;
