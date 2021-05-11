import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import DeckCard from "./DeckCard.js";

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
  console.log(decks);

  // if (listDecks.length === 0) {
  //   return (
  //     <button class="btn btn-secondary" type="button">
  //       +Create Deck
  //     </button>
  //   );
  // }

  const deckCards = decks.map((deck) => <DeckCard deck={deck} />);

  return (
    <>
      <button className="btn btn-secondary" type="button">
        + Create Deck
      </button>
      <div>{deckCards}</div>
    </>
  );
}

export default AllDecks;
