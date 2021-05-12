import React, { useState, useEffect } from "react";
import { listCards, deleteDeck } from "../utils/api";

function DeckOverview({ deck }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const response = await listCards();
      setCards(response);
    }
    loadCards();
  }, [deck]);

  const handleDelete = () => {
    const confirm = window.confirm(
      "Delete this deck? You will not be able to recover it"
    );
    if (confirm) deleteDeck(deckId);
  };

  const deckName = deck.name;
  const deckDesc = deck.description;
  const cardAmount = cards.length;
  const deckId = deck.id;

  return (
    <div className="card m-2">
      <div className="card-body">
        <p className="card-text-small">{cardAmount} cards</p>
        <h3 className="card-title">{deckName}</h3>
        <p className="card-text">{deckDesc}</p>
        <a className="btn btn-secondary" href={`decks/${deckId}`}>
          View
        </a>
        <a className="btn btn-primary" href={`decks/${deckId}/study`}>
          Study
        </a>
        <button className="btn btn-danger" type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeckOverview;
