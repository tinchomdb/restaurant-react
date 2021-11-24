import React, { useEffect } from "react";
import About from "../components/About";
import CarouselResto from "../components/CarouselResto";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out",
    });
  }, []);

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
