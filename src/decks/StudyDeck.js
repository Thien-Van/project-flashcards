import React, { useState, useEffect } from "react";
import StudyCard from "../cards/StudyCard";

function StudyDeck({ reading, cards }) {
  const [cardNum, setCardNum] = useState(0);
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const deckTitle = reading.name;
  const deckLength = cards.length;

  console.log(reading);

  const nextCard = () => {
    setCardNum(+1);
    setCurrentCard(cards[cardNum]);
    if (cardNum === deckLength - 1) {
      const restart = window.confirm(
        "Restart Cards? Click 'cancel' to return to home page"
      );

      if (restart) {
        setCardNum(0);
      } else {
        window.open("/", "Home");
      }
    }
  };

  // useEffect(() => {
  //   if (cards) {
  //     setCurrentCard(cards[cardNum]);
  //   }
  // }, []);

  // const deckLength = 4;

  // debug to 1 change to 3 later
  if (deckLength < 1) {
    return (
      <>
        <h1>Study: {deckTitle}</h1>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cars to study. There are {deckLength} cards in the
          deck.
        </p>
        <button className="btn btn-primary">Add card</button>
      </>
    );
  }

  return (
    <>
      <h1>Study: {deckTitle}</h1>
      <StudyCard currentCard={currentCard} nextCard={nextCard} />
    </>
  );
}

export default StudyDeck;
