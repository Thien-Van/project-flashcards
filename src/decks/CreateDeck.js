import React from "react";

function CreateDeck() {
  return (
    <>
      <h1>Create Deck</h1>
      <label htmlFor="deckName" className="form-label">
        Name
      </label>
      <input
        type="email"
        className="form-control"
        id="deckName"
        placeholder="name@example.com"
      ></input>
      <label htmlFor="deckDescription" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        id="deckDescription"
        rows="3"
      ></textarea>
      <button className="btn btn-secondary">Cancel</button>
      <button className="btn btn-primary">Submit</button>
    </>
  );
}

export default CreateDeck;
