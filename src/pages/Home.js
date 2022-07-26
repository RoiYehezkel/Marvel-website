import React from "react";
import "../App.css";
import Carousel from "../components/carousel/Carousel";
import CountDown from "../components/countDown/CountDown";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/herosection/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <CountDown />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
