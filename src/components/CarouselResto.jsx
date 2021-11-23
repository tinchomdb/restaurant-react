import React from "react";
import "./CarouselResto.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const settings = {
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  swipeable: true,
  showIndicators: false,
  autoPlay: true,
  interval: 3000,
};

function CarouselResto() {
  return (
    <div>
      <Carousel {...settings} className="carousel-resto">
        <div className="slide">
          <img className="slide-image" src="img/picardo.jpg" alt="" />
          <div className="slide-text">
            <h3 className="slide-title">Slide Title</h3>
            <h1>Las Mejores Picadas de Mendoza</h1>

            <a href="#team">Meet our chef</a>
          </div>
        </div>
        <div className="slide">
          <img className="slide-image" src="img/decarnes.jpg" alt="" />
          <div className="slide-text">
            <h3 className="slide-title">Slide Title</h3>
            <h1>Las Mejores Picadas de Mendoza</h1>

            <a href="#team">Meet our chef</a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselResto;
