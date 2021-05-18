import React, { useEffect, useState } from "react";
import StudyCard from "../study/StudyCard";

function StudyDeck({ deck }) {
  console.log(deck);
  const [cards, setCards] = useState([]);
  const [cardNum, setCardNum] = useState(0);
  const [content, setContent] = useState("");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (Object.keys(deck).length > 0) {
      setCards(deck.cards);
      setContent(deck.cards[0].front);
      setCardNum(0);
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
  }, [cardNum]);

  return (
    <div>
      <div className="row">
        <h1>{deck.name}</h1>
      </div>
      <StudyCard
        flipCard={flipCard}
        content={content}
        hidden={hidden}
        nextCard={nextCard}
      />
    </div>
  );
}

export default StudyDeck;
