import React from "react";
import "../../App.css";
import { Button } from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="hero-container">
      <video src="../videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for</p>
      <div class="heros-btn">
        <Button class="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button class="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER
          <i class="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
