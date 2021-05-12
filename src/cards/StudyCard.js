import React, { useState } from "react";

function StudyCard({ currentCard, nextCard }) {
  // const card
  const front = currentCard.front;
  const back = currentCard.back;
  const [content, setContent] = useState(front);
  const [visibility, setVisibility] = useState("invisible");
  const handleFlip = () => {
    setContent(back);
    setVisibility("visible");
  };

  return (
    <>
      <div className="card m-2 p-2">
        <h3>Card number from </h3>
        <p>{content}</p>
        <button className="btn btn-secondary" onClick={handleFlip}>
          Flip
        </button>
        <button className={`${visibility} btn btn-primary`} onClick={nextCard}>
          Next
        </button>
      </div>
    </>
  );
}

export default StudyCard;
