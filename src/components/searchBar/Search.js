import React from "react";
import { useState } from "react";
import "./Search.css";

function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for movie"
          value={inputValue}
          className="search"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              props.search(inputValue);
              setFilterValue("All");
            }
          }}
        />
        <button
          className="btn-search"
          onClick={() => {
            props.search(inputValue);
            setFilterValue("All");
          }}
        >
          <i className="fa-solid fa-magnifying-glass fa-xl search-logo"></i>
        </button>
        <button
          className="btn btn-outline-dark clear-btn"
          onClick={() => {
            props.search("clear");
            setInputValue("");
            setFilterValue("All");
          }}
        >
          Clear
        </button>
        <div className="filtering-container">
          <label className="collection-sort">Filter by:</label>
          <select
            value={filterValue}
            onChange={(e) => {
              setInputValue("");
              setFilterValue(e.target.value);
              props.select(e.target.value);
            }}
          >
            <Option category={props.categories} />
          </select>
        </div>
      </div>
    </div>
  );
}
function Option(props) {
  const options = props.category.map((prop) => (
    <option key={prop}>{prop}</option>
  ));
  return options;
}
export default Search;
