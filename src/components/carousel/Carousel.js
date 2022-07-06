import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div
      id="carousel-testimonials"
      class="carousel slide heros-container"
      data-bs-ride="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2>
            Inventor Tony Stark applies his genius for high-tech solutions to
            problems as Iron Man, the armored Avenger.
          </h2>
          <img
            class="testimonial-image"
            src="./images/ironman.jpg"
            alt="dog-profile"
          />
          <em>IRON MAN</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">
            America’s World War II Super-Soldier continues his fight in the
            present as an Avenger and untiring sentinel of liberty.
          </h2>
          <img
            class="testimonial-image"
            src="images/captain.jpg"
            alt="lady-profile"
          />
          <em>CAPTAIN AMERICA</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">
            Exposed to heavy doses of gamma radiation, scientist Bruce Banner
            transforms into the mean, green rage machine called the Hulk.
          </h2>
          <img
            class="testimonial-image"
            src="images/hulk.jpg"
            alt="lady-profile"
          />
          <em>HULK</em>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-testimonials"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel-testimonials"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
