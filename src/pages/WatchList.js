import React from "react";
import "../App.css";
import Footer from "../components/footer/Footer";
import Cards from "../components/cards/Cards";

export default function WatchList(props) {
  let emptyList = props.watchlist.length === 0 ? true : false;
  return emptyList ? (
    <>
      <img
        className="background-img-watchlist-empty"
        src="./images/empty.png"
        alt="empty-logo"
      />
      <Footer />
    </>
  ) : (
    <>
      <img
        className="background-img-watchlist"
        src="./images/avengers4.jpg"
        alt="avengers-logo"
      />
      <Cards movies={props.watchlist} />
      <Footer />
    </>
  );
}
