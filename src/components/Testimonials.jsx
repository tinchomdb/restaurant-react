import React from "react";
import "./Testimonials.css";
import { Parallax } from "react-parallax";
import { Carousel } from "react-responsive-carousel";

const settings = {
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  swipeable: false,
  showIndicators: true,
  autoPlay: true,
  interval: 5000,
  showStatus: false,
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
          <Carousel {...settings}>
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
          </Carousel>
        </div>
      </Parallax>
    </div>
  );
}

export default Testimonials;
