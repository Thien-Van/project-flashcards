import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";

function EditCard({ deckId }) {
  const history = useHistory();
  const [updatedCard, setUpdatedCard] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const handleFrontChange = (event) => setCardFront(event.target.value);
  const handleBackChange = (event) => setCardBack(event.target.value);

  useEffect(() => {
    if (Object.keys(updatedCard).length > 0) {
      const abortController = new AbortController();
      let signal = null;
      async function loadNewCard() {
        try {
          signal = abortController.signal;
          const response = await updateCard(deckId, updatedCard, signal);
          history.push(`/decks/${deckId}`);
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadNewCard();
      return () => abortController.abort;
    }
  }, [updatedCard]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdatedCard({
      front: cardFront,
      back: cardBack,
    });
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`#`}>Deck</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card X
          </li>
        </ol>
      </nav>
      <div>
        <h1>Edit Card</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardFront" className="mt-3">
              Front
            </label>
            <textarea
              className="form-control"
              id="cardFront"
              rows="3"
              placeholder="Front side of card."
              onChange={handleFrontChange}
              value={cardFront}
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
              onChange={handleBackChange}
              value={cardBack}
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
