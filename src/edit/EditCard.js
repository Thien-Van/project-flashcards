import React from "react";
import { Link } from "react-router-dom";

function EditCard({ deckId }) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`#`}>Deck</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Edit Card X
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Card</h1>
        <form>
          <div className="form-group">
            <label htmlFor="cardFront" className="mt-3">
              Front
            </label>
            <textarea
              className="form-control"
              id="cardFront"
              rows="3"
              placeholder="Front side of card."
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="cardBack" className="mt-3">
              Back
            </label>
            <textarea
              className="form-control"
              id="cardBack"
              rows="3"
              placeholder="Back side of card."
            ></textarea>
          </div>
          <div className="mt-2">
            <Link className="btn btn-secondary m-1" to={`/decks/${deckId}`}>
              Cancel
            </Link>
            <button className="btn btn-primary m-1" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
