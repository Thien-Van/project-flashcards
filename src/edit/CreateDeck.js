import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <div>
      <h1>Create Deck</h1>
      <form>
        <div className="form-group"></div>
        <label htmlFor="deckName" className="mt-3">
          Name
        </label>
        <input
          type="deckName"
          className="form-control"
          id="deckName"
          placeholder="Deck Name"
        ></input>
        <div className="form-group">
          <label htmlFor="deckDescription" className="mt-3">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="deckDescription"
            rows="3"
            placeholder="Brief description of the deck."
          ></textarea>
        </div>
        <div className="mt-2">
          <Link className="btn btn-secondary m-1" to="/">
            Cancel
          </Link>
          <button className="btn btn-primary m-1" to="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
