import React from "react";

function AddCard() {
  return (
    <>
      <h2>Title</h2>
      <label for="cardFront" className="form-label">
        Front
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
      <label for="ecardBack" className="form-label">
        Back
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </>
  );
}

export default AddCard;
