import React from "react";
import "../App.css";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/herosection/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
