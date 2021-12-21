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

function Testimonials({ comments }) {
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
            {comments?.map((item, index) => (
              <>
                <p className="testimonial-text">{item.text}</p>
                <p className="testimonial-text">{item.author}</p>
              </>
            ))}
          </Slider>
        </div>
      </Parallax>
    </div>
  );
}

export default Testimonials;
