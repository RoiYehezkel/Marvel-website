import React from "react";
import { useState } from "react";
import "./Search.css";

function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  return (
    <div class="search-container">
      <div class="search-wrapper">
        <input
          type="text"
          placeholder="Search for movie"
          value={inputValue}
          class="search"
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
          class="btn-search"
          onClick={() => {
            props.search(inputValue);
            setFilterValue("All");
          }}
        >
          <i class="fa-solid fa-magnifying-glass fa-xl search-logo"></i>
        </button>
        <button
          class="btn btn-outline-dark clear-btn"
          onClick={() => {
            props.search("clear");
            setInputValue("");
            setFilterValue("All");
          }}
        >
          Clear
        </button>
        <div class="filtering-container">
          <label class="collection-sort">Filter by:</label>
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
