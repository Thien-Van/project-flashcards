import React from "react";

function StudyCard({ currentCard, nextCard }) {
  // const card

  let content = currentCard.front;
  const handleFlip = (event) => {
    event.preventDefaut();
    content = currentCard.back;
  };

  return (
    <>
      <div className="card m-2 p-2">
        <h3>Card number from </h3>
        <p>{content}</p>
        <button className="btn btn-secondary" onClick={handleFlip}>
          Flip
        </button>
        <button className="btn btn-primary" onClick={nextCard}>
          Next
        </button>
      </div>
    </>
  );
}

export default StudyCard;
