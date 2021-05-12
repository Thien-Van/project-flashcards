import React from "react";

function Card({ reading, nextCard }) {
  // const card

  const handleFlip = () => {};

  return (
    <>
      <div className="card m-2 p-2">
        <h3>Card number</h3>
        <p>question</p>
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

export default Card;
