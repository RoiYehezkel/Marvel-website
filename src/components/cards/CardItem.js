import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <li class="cards-item">
        {/* <Link> */}
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
        {/* </Link> */}
        <div class="add-btn-wrapper">
          <button class="add-btn" onClick={handleClick}>
            <i
              class={
                click ? "fa-solid fa-minus fa-2xl" : "fa-solid fa-plus fa-2xl"
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
