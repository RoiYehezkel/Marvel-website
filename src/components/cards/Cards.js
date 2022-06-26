import React from "react";
import CardItem from "./CardItem";
import { useContext } from "react";
import loginContext from "../../context/loginContext";

function Cards() {
  const { movies } = useContext(loginContext);
  return (
    <div class="cards">
      <div class="cards-container">
        <div class="cards-wrapper">
          <ul class="cards-items">
            {movies.map((movie) => (
              <CardItem data={movie} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
