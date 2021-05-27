import React from "react";

function StudyCard({
  flipCard,
  content,
  hidden,
  nextCard,
  totalCards,
  cardNum,
}) {
  return (
    <div className="card  p-1">
      <div className="card-body">
        <h3>
          Card {cardNum} of {totalCards}
        </h3>
        <p>{content}</p>
        <button className="btn btn-secondary m-1" onClick={flipCard}>
          Flip
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={nextCard}
          hidden={hidden}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StudyCard;
