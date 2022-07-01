import React from "react";
import Cards from "../components/cards/Cards";
import "../App.css";
import Search from "../components/searchBar/Search";
import Footer from "../components/footer/Footer";

export default function Movies(props) {
  return (
    <>
      {/* <h1 className="services">SERVICES</h1> */}
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
