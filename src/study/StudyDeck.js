import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import StudyCard from "../study/StudyCard";

function StudyDeck({ deckId }) {
  const [deck, setDeck] = useState({});
  const [cardNum, setCardNum] = useState(0);
  const [content, setContent] = useState("");
  const [cards, setCards] = useState([]);
  const [hidden, setHidden] = useState(true);
  //   let cards = [];
  useEffect(() => {
    const abortController = new AbortController();
    let signal = null;
    loadDeck();
    async function loadDeck() {
      try {
        signal = abortController.signal;
        const response = await readDeck(deckId, signal);
        setDeck(response);
        setCards(response.cards);
        setContent(response.cards[0].front);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadDeck();
    return () => abortController.abort;
  }, []);

  //   cards = deck.cards;
  console.log(cards);

  const flipCard = () => {
    setContent(cards[cardNum].back);
    setHidden(false);
    console.log("flip" + cardNum);
  };

  const nextCard = () => {
    console.log("length" + cards.length - 1);
    if (cardNum === cards.length) {
      console.log("last");
      setCardNum(0);
      setContent(cards[cardNum].front);
      setHidden(true);
    } else {
      setCardNum((currentNumber) => currentNumber + 1);
      console.log(cardNum);
      setContent(cards[cardNum].front);
      setHidden(true);
    }
  };

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
