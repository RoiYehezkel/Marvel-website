import React from "react";
import Cards from "../cards/Cards";
import "./WatchlistSection.css";
function WatchlistSection(props) {
  return (
    <div class="watchlist-container">
      <img
        class="background-img-watchlist"
        src="./images/avengers4.jpg"
        alt="avengers-logo"
      />
      <Cards movies={props.movies} />
    </div>
  );
}

export default WatchlistSection;
