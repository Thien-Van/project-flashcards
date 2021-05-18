import React from "react";

function CardOverview() {
  return (
    <div className="card">
      <div>
        <div>
          <p>Front text</p>
        </div>
        <div>
          <p>Back text</p>
        </div>
      </div>
      <div>
        <a className="btn btn-secondary">Edit</a>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default CardOverview;
