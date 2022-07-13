import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        className="background-img"
        src="./images/avengers1.jpg"
        alt="avengers-logo"
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for</p>
      <div className="heros-btn">
        <Link to="/movies">
          <button className="btn btn-outline-light btn-lg home-btn">
            GET STARTED
          </button>
        </Link>
        <button className="btn btn-dark btn-lg home-btn">
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
