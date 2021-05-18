import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { updateDeck } from "../utils/api";

function EditDeck({ deck }) {
  const history = useHistory();
  const [updatedDeck, setUpdatedDeck] = useState(deck);
  const [deckName, setDeckName] = useState(deck.name);
  const [deckDescription, setDeckDescription] = useState(deck.description);
  const handleNameChange = (event) => setDeckName(event.target.value);
  const handleDescriptionChange = (event) =>
    setDeckDescription(event.target.value);

  useEffect(() => {
    if (Object.keys(updatedDeck).length > 0) {
      const abortController = new AbortController();
      let signal = null;
      async function loadNewDeck() {
        try {
          signal = abortController.signal;
          const response = await updateDeck(updatedDeck, signal);
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
    setUpdatedDeck({
      name: deckName,
      description: deckDescription,
    });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`#`}>Deck</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Deck</h1>
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

export default EditDeck;
