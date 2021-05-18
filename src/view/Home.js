import React, { useState, useEffect } from "react";

import { listDecks } from "../utils/api";
import DeckOverview from "./DeckOverview";

function Home() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
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
  }, []);

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
