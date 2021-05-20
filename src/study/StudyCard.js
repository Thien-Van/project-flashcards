import React from "react";

function StudyCard({ flipCard, content, hidden, nextCard }) {
  return (
    <div className="card  p-1">
      <div className="card-body">
        <h3>Card x of y</h3>
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
