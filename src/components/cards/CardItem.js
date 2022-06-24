import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

// function CardItem(props) {
//   return (
//     <>
//       <li class="cards-item">
//         <Link to={props.path} class="cards-item-link">
//           <figure class="cards-item-pic-wrap" data-category={props.label}>
//             <img src={props.src} alt="Travel" class="cards-item-img" />
//           </figure>
//           <div class="cards-item-info">
//             <h5 class="cards-item-text">{props.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// }
function CardItem(props) {
  return (
    <>
      <li class="cards-item ">
        <Link to="/" class="cards-item-link">
          <figure class="cards-item-pic-wrap" data-category="Add to WatchList">
            <img
              class="cards-item-img"
              src={props.data.image}
              alt={props.data.title}
            />
          </figure>
          <div class="cards-item-info">
            <h5 class="cards-item-text">{props.data.title}</h5>
            <h6 class="cards-item-date">{props.data.date}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
