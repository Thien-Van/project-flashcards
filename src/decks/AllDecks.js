import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import DeckOverview from "./DeckOverview.js";

function AllDecks() {
  // const listDecks = listDecks();
  // console.log(listDecks);

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDecks();
  }, []);

  // if (listDecks.length === 0) {
  //   return (
  //     <button class="btn btn-secondary" type="button">
  //       +Create Deck
  //     </button>
  //   );
  // }

  const deckCards = decks.map((deck) => (
    <DeckOverview deck={deck} key={deck.id} />
  ));

  return (
    <>
      <a className="btn btn-secondary" href="decks/new">
        + Create Deck
      </a>
      <div>{deckCards}</div>
    </>
  );
}

export default AllDecks;
