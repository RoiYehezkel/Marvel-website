import React from "react";
import "../App.css";
import Footer from "../components/footer/Footer";
import Cards from "../components/cards/Cards";

export default function WatchList(props) {
  return (
    <>
      <Cards movies={props.watchlist} />
      <Footer />
    </>
  );
}
