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
      <li className="cards-item">
        <div className="cards-item-link">
          <div className="cards-item-pic-wrap">
            <img
              className="cards-item-img"
              src={props.data.image}
              alt={props.data.title}
            />
          </div>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.data.title}</h5>
            <h6 className="cards-item-date">{props.data.date}</h6>
          </div>
        </div>
        <div className="add-btn-wrapper">
          <button className="add-btn" onClick={handleClick}>
            <i
              className={
                watchlistDisabled
                  ? "fa-solid fa-minus fa-2xl"
                  : "fa-solid fa-plus fa-2xl"
              }
            ></i>
          </button>
        </div>
        <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{props.data.description}</p>
          <div className="footer-card-container">
            <div className="run-time-container">
              <h5 className="footer-card-header">RUN TIME</h5>
              <h6 className="footer-card-info">{props.data.time}</h6>
            </div>
            <div className="rating-container">
              <h5 className="footer-card-header">RATING</h5>
              <h6 className="footer-card-info">{props.data.rating}</h6>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
