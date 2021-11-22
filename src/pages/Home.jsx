import React from "react";
import About from "../components/About";
import CarouselResto from "../components/CarouselResto";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <CarouselResto />
      <About />
      <Gallery />
    </div>
  );
}

export default Home;
