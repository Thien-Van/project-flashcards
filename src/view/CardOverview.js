import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../utils/api";

function CardOverview({ front, back, id }) {
  const { url } = useRouteMatch;
  console.log(url);
  const handleDelete = () => {
    const confirm = window.confirm(
      "Delete this card? You will not be able to recover it"
    );
    if (confirm) {
      deleteCard(id);
      window.open(`${url}`, "Deck");
    }
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-sm m-1">
          <p>{front}</p>
        </div>
        <div className="col-sm m-1">
          <p>{back}</p>
        </div>
      </div>
      <div className="mt-1">
        <Link className="btn btn-secondary m-1" to={`${url}/cards/${id}/edit`}>
          Edit
        </Link>
        <button className="btn btn-danger m-1" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardOverview;
