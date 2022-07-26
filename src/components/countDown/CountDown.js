import React, { useState, useEffect } from "react";
import "./CountDown.css";

function CountDown() {
  const [nextFilm, setNextFilm] = useState([]);
  // calling and get data from server
  const fetchData = () => {
    fetch("https://www.whenisthenextmcufilm.com/api")
      .then((res) => res.json())
      .then((movie) => {
        setNextFilm(movie);
        console.log(nextFilm.following_production);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="nextFilm-container">
      <h1 className="comingSoon">Coming Soon!</h1>
      <h3>
        {nextFilm.title} release in <i>{nextFilm.days_until} days!</i>
      </h3>
      <h5>Release Date: {nextFilm.release_date}</h5>
      <h5>Production Type: {nextFilm.type}</h5>
      <img
        className="nextFilm-img"
        src={nextFilm.poster_url}
        alt="next film image"
      />
    </div>
  );
}

export default CountDown;
