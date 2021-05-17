import React from "react";

function CreateDeck() {
  return (
    <div>
      <h1>Create Deck</h1>
      <form>
        <div className="form-group"></div>
        <label for="deckName" classNeme="mt-3">
          Name
        </label>
        <input
          type="deckName"
          class="form-control"
          id="deckName"
          placeholder="Deck Name"
        ></input>
        <div clssName="form-group">
          <label for="deckDescription" className="mt-3">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="deckDescription"
            rows="3"
            placeholder="Brief description of the deck."
          ></textarea>
        </div>
        <div className="mt-2">
          <a className="btn btn-secondary m-1" href="/">
            Cancel
          </a>
          <button className="btn btn-primary m-1" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
