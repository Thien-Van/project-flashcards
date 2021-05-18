import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function CardOverview({ deleteCard, front, back, id }) {
  const { url } = useRouteMatch;
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
        <button className="btn btn-danger m-1" onClick={deleteCard}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardOverview;
