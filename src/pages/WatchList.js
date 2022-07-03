import React from "react";
import "../App.css";
import Footer from "../components/footer/Footer";
import Cards from "../components/cards/Cards";
// import WatchlistSection from "../components/watchlistsection/WatchlistSection";

export default function WatchList(props) {
  return (
    <>
      <img
        class="background-img-watchlist"
        src="./images/avengers4.jpg"
        alt="avengers-logo"
      />
      <Cards movies={props.watchlist} />
      {/* <WatchlistSection movies={props.watchlist} /> */}
      <Footer />
    </>
  );
}
