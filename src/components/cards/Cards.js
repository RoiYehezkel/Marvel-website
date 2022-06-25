import React from "react";
import CardItem from "./CardItem";
import { useContext } from "react";
import loginContext from "../../context/loginContext";

// function Cards() {
//   return (
//     <div class="cards">
//       <h1>Check out these EPIC Destinations!</h1>
//       <div class="cards-container">
//         <div class="cards-wrapper">
//           <ul class="cards-item">
//             <CardItem
//               src="./images/img-9.jpg"
//               text="Explore the hidden waterfall deep inside the Amazon Jungle"
//               label="Adventure"
//               path="/Services"
//             />
//             <CardItem
//               src="./images/img-7.jpg"
//               text="Travel to the iland"
//               label="Luxury"
//               path="/Services"
//             />
//             <CardItem
//               src="./images/img-4.jpg"
//               text="Travel to the iland"
//               label="Luxury"
//               path="/Services"
//             />
//             <CardItem
//               src="./images/img-2.jpg"
//               text="Travel to the iland"
//               label="Luxury"
//               path="/Services"
//             />
//             <CardItem
//               src="./images/img-5.jpg"
//               text="Travel to the iland"
//               label="Luxury"
//               path="/Services"
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
function Cards() {
  const { movies } = useContext(loginContext);
  return (
    <div class="cards">
      <div class="cards-container">
        <div class="cards-wrapper">
          <ul class="cards-item">
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
