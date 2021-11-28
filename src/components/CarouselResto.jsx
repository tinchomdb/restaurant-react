import React from "react";
import "./CarouselResto.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HashLink as Link } from "react-router-hash-link";

const settings = {
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  swipeable: false,
  showIndicators: false,
  autoPlay: true,
  interval: 3000,
  showStatus: false,
};

function CarouselResto() {
  return (
    <div id="home">
      <Carousel {...settings} className="carousel-resto">
        <div className="slide">
          <img className="slide-image" src="img/picardo.jpg" alt="" />
          <div className="slide-text">
            <h3 className="slide-title">Conocé Picardo</h3>
            <h1>Las Mejores Picadas de Mendoza</h1>

            <Link to="/#conocenos">Conocenos</Link>
          </div>
        </div>
        <div className="slide">
          <img className="slide-image" src="img/decarnes.jpg" alt="" />
          <div className="slide-text">
            <h3 className="slide-title">Conocé nuestra carta</h3>
            <h1>Todas nuestros plato y bebidas del restaurant</h1>

            <Link to="/carta#home">Carta</Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselResto;
