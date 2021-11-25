import React from "react";
import "./Section.css";

function Section({ section, even }) {
  return (
    <div className="section-wrapper">
      <div className="section container">
        <div
          className="section-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h4>{section?.subtitle}</h4>
          <h2>{section?.title}</h2>
          <p>{section?.description}</p>
        </div>

        <img
          className="section-image"
          src={section?.photo}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Section;
