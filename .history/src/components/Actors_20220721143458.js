import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actorItems = actors.map((item) => (
    <div key={item.name}>
      <h2>{item.name}</h2>
      <ul>
        {item.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {actorItems}
    </div>
  );
};

export default Actors;