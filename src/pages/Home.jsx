import React from "react";
import About from "../components/About";
import CarouselResto from "../components/CarouselResto";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <CarouselResto />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
