import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateDeck() {
  const history = useHistory();
  const [newDeck, setNewDeck] = useState({});
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const handleNameChange = (event) => setDeckName(event.target.value);
  const handleDescriptionChange = (event) =>
    setDeckDescription(event.target.value);

  useEffect(() => {
    if (Object.keys(newDeck).length > 0) {
      const abortController = new AbortController();
      let signal = null;
      async function loadNewDeck() {
        try {
          signal = abortController.signal;
          const response = await createDeck(newDeck, signal);
          history.push(`/decks/${response.id}`);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadNewDeck();
      return () => abortController.abort;
    }
  }, [newDeck]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewDeck({
      name: deckName,
      description: deckDescription,
    });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <div>
        <h1>Create Deck</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group"></div>
          <label htmlFor="deckName" className="mt-3">
            Name
          </label>
          <input
            type="deckName"
            className="form-control"
            id="deckName"
            placeholder="Deck Name"
            onChange={handleNameChange}
            value={deckName}
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
              onChange={handleDescriptionChange}
              value={deckDescription}
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
    </div>
  );
}

export default CreateDeck;
