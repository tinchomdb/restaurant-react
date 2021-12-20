import React from "react";
import About from "../components/About";
import CarouselResto from "../components/CarouselResto";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import "./Home.css";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

function Home() {
  const storeSections = useSelector((state) => state.sections.sectionsItems);

  return (
    <div className="home">
      <Navbar />
      <CarouselResto id="home" sections={storeSections} />
      <About sections={storeSections} />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
