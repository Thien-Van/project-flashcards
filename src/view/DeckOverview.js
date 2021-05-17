import React from "react";

function DeckOverview({ cardNum, title, description, id, deleteDeck }) {
  return (
    <div className="card m-2">
      <div className="card-header">
        <p>
          <small>{cardNum} cards</small>
        </p>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="btn btn-secondary" href={`/decks/${id}`}>
          View
        </a>
        <a className="btn btn-primary" href={`/decks/${id}/study`}>
          Study
        </a>
        <button className="btn btn-danger" onClick={deleteDeck}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeckOverview;
