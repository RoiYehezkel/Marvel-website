import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li class="cards-item">
        <Link to={props.path} class="cards-item-link">
          <figure class="cards-item-pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" class="cards-item-img" />
          </figure>
          <div class="cards-item-info">
            <h5 class="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
