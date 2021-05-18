import React from "react";
import { Link } from "react-router-dom";

function DeckOverview({ cardNum, title, description, id, deleteDeck }) {
  return (
    <div className="card m-2">
      <div className="row m-1">
        <div className="col-sm-10">
          <h3>{title}</h3>
        </div>
        <div className="col-sm-2">
          <p className="text-right">
            <small>{cardNum} cards</small>
          </p>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-sm">
          <p>{description}</p>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-sm-10">
          <Link className="btn btn-secondary m-1" to={`/decks/${id}`}>
            View
          </Link>
          <Link className="btn btn-primary m-1" to={`/decks/${id}/study`}>
            Study
          </Link>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-danger m-1" onClick={deleteDeck}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckOverview;
