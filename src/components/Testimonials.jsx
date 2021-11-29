import React from "react";
import "./Testimonials.css";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,

  swipe: true,
  arrows: false,
  swipeToSlide: true,
  fade: true,
};

function Testimonials() {
  return (
    <div className="testimonials" data-aos="fade-up">
      <Parallax
        blur={0}
        bgImage="img/parallax.jpg"
        bgImageAlt="the cat"
        strength={600}
      >
        <div className="text-wrapper">
          <h2 className="testimonials-title">
            Comentarios de nuestros clientes
          </h2>
          <Slider {...settings}>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              debitis sint eius consectetur tempore blanditiis non maiores vel,
              veniam eaque.
            </p>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic,
              natus distinctio tempore sequi quas ipsam animi magnam voluptate
              eos incidunt dicta explicabo? Perferendis magni tempore
              accusantium dolore iste praesentium.
            </p>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              dicta modi adipisci aspernatur. Possimus excepturi facilis optio
              distinctio officiis impedit molestiae dicta! Repellat, molestiae
              corporis?
            </p>
          </Slider>
        </div>
      </Parallax>
    </div>
  );
}

export default Testimonials;
