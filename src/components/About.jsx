import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about container">
        <div className="about-text" data-aos="fade-right">
          <h4>Conoce nuestra historia</h4>
          <h2>Haciendo las mejores picadas desde 2011</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            tenetur, eligendi fugit minima quam hic est porro, accusamus
            perferendis ipsa ad sint doloremque consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            maiores eaque provident quidem iste numquam soluta, dolorum quo
            vero, culpa ducimus vitae ipsam molestiae enim magni nemo!
          </p>
        </div>

        <img
          className="about-image"
          src="img/regalo3.jpg"
          alt=""
          data-aos="fade-left"
        />
      </div>
    </div>
  );
}

export default About;
