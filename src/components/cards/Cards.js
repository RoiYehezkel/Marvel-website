import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {props.movies.map((movie) => (
              <CardItem key={movie.id} data={movie} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
