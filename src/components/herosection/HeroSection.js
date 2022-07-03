import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="hero-container">
      <img
        class="background-img"
        src="./images/avengers1.jpg"
        alt="avengers-logo"
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for</p>
      <div class="heros-btn">
        <Link to="/movies">
          <button class="btn btn-outline-light btn-lg home-btn">
            GET STARTED
          </button>
        </Link>
        <button class="btn btn-dark btn-lg home-btn">
          WATCH TRAILER
          <i class="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
