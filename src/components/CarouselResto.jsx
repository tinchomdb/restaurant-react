import React from "react";
import "./CarouselResto.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HashLink as Link } from "react-router-hash-link";
import Loader from "./Loader";

var settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  swipe: true,
  arrows: false,
  swipeToSlide: true,
  fade: true,

  /* 
  
  */
};

function CarouselResto({ sections }) {
  const filteredSections = sections.filter((section) =>
    section.category?.includes("carrusel")
  );

  return (
    <div id="home">
      <Slider {...settings} className="carousel-resto">
        {filteredSections.length === 0 ? (
          <Loader color="goldenrod" type="spin" />
        ) : (
          filteredSections.map((section, index) => (
            <div className="slide" key={index}>
              <img className="slide-image" src={section.img} alt="" />
              <div className="slide-text">
                <h3 className="slide-title">{section.subtitle}</h3>
                <h1>{section.title}</h1>

                {!section.isInterno && section.linkText && section.url ? (
                  <a href={section.url} target="_blank" rel="noreferrer">
                    {section.linkText}
                  </a>
                ) : section.linkText && section.url ? (
                  <Link to={section.url}>{section.linkText}</Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}

export default CarouselResto;
