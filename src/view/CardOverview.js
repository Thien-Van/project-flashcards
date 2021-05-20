import React from "react";
import { useRouteMatch } from "react-router-dom";
import { deleteCard } from "../utils/api";

function CardOverview({ front, back, id, editCard }) {
  const { url } = useRouteMatch;
  const handleDelete = () => {
    const confirm = window.confirm(
      "Delete this card? You will not be able to recover it"
    );
    if (confirm) {
      deleteCard(id);
      window.open(`${url}`, "Deck");
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    editCard(id);
  };

  return (
    <div className="card m-2">
      <div className="row">
        <div className="col-sm m-1">
          <p>{front}</p>
        </div>
        <div className="col-sm m-1">
          <p>{back}</p>
        </div>
      </div>
      <div className="mt-1">
        <button className="btn btn-secondary m-1" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger m-1" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardOverview;
