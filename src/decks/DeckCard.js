import React, { useState, useEffect } from "react";
import listCards from "../utils/api";
import { useEffect, useState } from "react";

function DeckCard({ deck }) {
  const cardCount = () => {};
  return (
    <div key={deck.id} className="card m-2">
      <div className="card-body">
        <p className="card-text-small"></p>
        <h3 className="card-title">{deck.name}</h3>
        <p className="card-text">{deck.description}</p>
        <button className="btn btn-secondary" type="button">
          View
        </button>
        <button className="btn btn-primary" type="button">
          Study
        </button>
      </div>
    </div>
  );
}

export default DeckCard;
