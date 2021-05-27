import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudyCard from "../study/StudyCard";

function StudyDeck({ deck }) {
  const [cards, setCards] = useState([]);
  const [cardNum, setCardNum] = useState(0);
  const [content, setContent] = useState("");
  const [hidden, setHidden] = useState(true);
  //   const [tooShort, setTooShort] = useState(false);

  useEffect(() => {
    if (Object.keys(deck).length > 0) {
      setCards(deck.cards);
      setContent(deck.cards[0].front);
      setCardNum(0);
      //   if (cards.length < 3) setTooShort(true);
    }
  }, [deck]);

  const flipCard = () => {
    setContent(cards[cardNum].back);
    setHidden(false);
  };

  const nextCard = () => {
    if (cardNum === cards.length - 1) {
      const restart = window.confirm(
        "Restart Cards? Click 'cancel' to return to home page"
      );
      if (restart) {
        setCardNum(0);
      } else {
        window.open("/", "Home");
      }
    } else {
      setCardNum((currentNumber) => currentNumber + 1);
    }
  };
  useEffect(() => {
    if (cards.length > 0) {
      setContent(cards[cardNum].front);
      setHidden(true);
    }
  }, [cardNum, cards]);

  if (Object.keys(deck).length > 0 && cards.length < 3) {
    return (
      <div>
        <h1>Study: {deck.title}</h1>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cars to study. There are {cards.length} cards in
          the deck.
        </p>
        <Link className="btn btn-primary" to={`/decks/${deck.id}/card/new`}>
          Add card
        </Link>
      </div>
    );
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <div className="row">
        <h1>{deck.name}</h1>
      </div>
      <StudyCard
        flipCard={flipCard}
        content={content}
        hidden={hidden}
        nextCard={nextCard}
        totalCards={cards.length}
        cardNum={cardNum + 1}
      />
    </div>
  );
}

export default StudyDeck;
