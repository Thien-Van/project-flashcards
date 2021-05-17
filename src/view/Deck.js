import React from "react";
import EditDeck from "../edit/EditDeck";
import StudyDeck from "../study/StudyDeck";
import AddCard from "../edit/AddCard";
import { useParams } from "react-router-dom";

function Deck() {
  const { id } = useParams();
  return (
    <div>
      <h1>Deck View {id}</h1>
      <p>viewing deck right now</p>
    </div>
  );
}

export default Deck;
