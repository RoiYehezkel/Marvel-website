import React from "react";
import "../../App.css";
// import { Button } from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="hero-container">
      <video src="../videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for</p>
      <div class="heros-btn">
        <button class="btn btn-outline-light btn-lg">GET STARTED</button>
        <button class="btn btn-dark btn-lg">
          WATCH TRAILER
          <i class="far fa-play-circle" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
