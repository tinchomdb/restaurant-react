import React from "react";
import "./CarouselResto.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HashLink as Link } from "react-router-hash-link";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  fade: true,
  swipeToSlide: true,
  swipe: true,
  arrows: true,
};

function CarouselResto() {
  return (
    <div id="home">
      <Slider {...settings} className="carousel-resto">
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
      </Slider>
    </div>
  );
}

export default CarouselResto;
