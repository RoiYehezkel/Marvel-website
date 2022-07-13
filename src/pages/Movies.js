import React from "react";
import Cards from "../components/cards/Cards";
import "../App.css";
import Search from "../components/searchBar/Search";
import Footer from "../components/footer/Footer";

export default function Movies(props) {
  return (
    <>
      <img
        className="background-img-movies"
        src="./images/avengers3.jpg"
        alt="avengers-logo"
      />
      <Search
        categories={props.categories}
        select={props.select}
        search={props.search}
      />
      <Cards movies={props.movies} />
      <Footer />
    </>
  );
}
