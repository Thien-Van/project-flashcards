import React from "react";
import { Link } from "react-router-dom";

function EditCard({ deckId }) {
  return (
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
  );
}

export default EditCard;
