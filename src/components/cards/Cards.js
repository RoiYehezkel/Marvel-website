import React from "react";
import CardItem from "./CardItem";

function Cards(props) {
  return (
    <div class="cards">
      <div class="cards-container">
        <div class="cards-wrapper">
          <ul class="cards-items">
            {props.movies.map((movie) => (
              <CardItem data={movie} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
