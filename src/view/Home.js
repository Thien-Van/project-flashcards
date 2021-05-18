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

  // const decks = [
  //   {
  //     cards: [1, 2, 3, 4],
  //     title: "Title 1",
  //     description: "Description 1",
  //     id: "1",
  //   },
  //   {
  //     cards: [1, 2, 3],
  //     title: "Title 2",
  //     description: "Description 2",
  //     id: "2",
  //   },
  //   {
  //     cards: [1, 2, 3, 4, 5],
  //     title: "Title 3",
  //     description: "Description 3",
  //     id: "3",
  //   },
  //   {
  //     cards: [1, 2],
  //     title: "Title 4",
  //     description: "Description 4",
  //     id: "4",
  //   },
  // ];

  const deleteDeck = () => {
    console.log("delete Deck");
  };

  const deckList = decks.map((deck) => (
    <DeckOverview
      cardNum={deck.cards.length}
      title={deck.name}
      description={deck.description}
      id={deck.id}
      key={deck.id}
      deleteDeck={deleteDeck}
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
