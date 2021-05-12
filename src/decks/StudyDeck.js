import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import Card from "../cards/Card";

function StudyDeck({ deckId }) {
  const [reading, setReading] = useState({});
  const [cardNum, setCardNum] = useState(0);

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setReading(response);
    }

    loadDeck();
  }, []);

  console.log(reading);

  const nextCard = () => {
    setCardNum(+1);
    if (cardNum === deckLength - 1) {
      console.log("restart");
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

  const deckTitle = reading.name;
  const deckLength = 2;

  if (deckLength < 3) {
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
      <Card reading={reading} nextCard={nextCard} />
    </>
  );
}

export default StudyDeck;
