import React from "react";
import { useState } from "react";
function Player({name, removePlayer}) {
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore(score + 1);
  }

  function removePoint() {
    setScore(score - 1);
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {name}
        <h2 className="text-center"></h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{/* Render score here */}{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button className="btn btn-outline-primary w-100" onClick={addPoint}>
            Add Point +
          </button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button className="btn btn-outline-danger w-100" onClick={removePoint}>
            Remove Point -
          </button>
        </div>
      </div>
      <button className="btn btn-outline-danger w-100 mt-3" onClick={removePlayer}>
            Remove Player
          </button>
    </div>
  );
}
export default Player;
