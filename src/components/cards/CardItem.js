import React from "react";
import "./Cards.css";
import { useContext } from "react";
import GlobalContext from "../../globalContext/GlobalContext";

function CardItem(props) {
  const { handleMovieToWatchlist, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((o) => o.id === props.data.id);
  const watchlistDisabled = storedMovie ? true : false;
  const handleClick = () => {
    if (watchlistDisabled === false) handleMovieToWatchlist(props.data, "add");
    else handleMovieToWatchlist(props.data, "remove");
  };

  return (
    <>
      <li class="cards-item">
        <div class="cards-item-link">
          <div class="cards-item-pic-wrap">
            <img
              class="cards-item-img"
              src={props.data.image}
              alt={props.data.title}
            />
          </div>
          <div class="cards-item-info">
            <h5 class="cards-item-text">{props.data.title}</h5>
            <h6 class="cards-item-date">{props.data.date}</h6>
          </div>
        </div>
        <div class="add-btn-wrapper">
          <button class="add-btn" onClick={handleClick}>
            <i
              class={
                watchlistDisabled
                  ? "fa-solid fa-minus fa-2xl"
                  : "fa-solid fa-plus fa-2xl"
              }
            ></i>
          </button>
        </div>
        <div class="movie-overview">
          <h2>Overview:</h2>
          <p>{props.data.description}</p>
          <div class="footer-card-container">
            <div class="run-time-container">
              <h5 class="footer-card-header">RUN TIME</h5>
              <h6 class="footer-card-info">{props.data.time}</h6>
            </div>
            <div class="rating-container">
              <h5 class="footer-card-header">RATING</h5>
              <h6 class="footer-card-info">{props.data.rating}</h6>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
