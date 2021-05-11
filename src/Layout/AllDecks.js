import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import { useEffect, useState } from "react";

function AllDecks() {
  // const listDecks = listDecks();
  // console.log(listDecks);

  const [decks, setDecks] = useState([]);
  const 
  // if (listDecks.length === 0) {
  //   return (
  //     <button class="btn btn-secondary" type="button">
  //       +Create Deck
  //     </button>
  //   );
  // }

  return (
    <>
      <button class="btn btn-secondary" type="button">
        + Create Deck
      </button>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">This is number1</h3>
          <p className="card-text">Number 1 is great, here are some cards</p>
          <button className="btn btn-secondary" type="button">
            View
          </button>
          <button className="btn btn-primary" type="button">
            Study
          </button>
        </div>
      </div>
    </>
  );
}

export default AllDecks;
