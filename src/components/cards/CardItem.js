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
        <button class="cards-item-link">
          <button class="cards-item-pic-wrap">
            <img
              class="cards-item-img"
              src={props.data.image}
              alt={props.data.title}
            />
          </button>

          <div class="cards-item-info">
            <h5 class="cards-item-text">{props.data.title}</h5>

            <h6 class="cards-item-date">{props.data.date}</h6>
          </div>
        </button>
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
      </li>
    </>
  );
}

export default CardItem;
