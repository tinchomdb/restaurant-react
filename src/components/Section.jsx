import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Section.css";

function Section({ section, even }) {
  return (
    <div className="section-wrapper" id={section.hashId}>
      <div className="section container">
        <div
          className="section-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h4>{section?.subtitle}</h4>
          <h2>{section?.title}</h2>
          <p>{section?.description}</p>
          {section.external ? (
            <a href={section.link} target="_blank" rel="noreferrer">
              <button className="cta-btn">{section.cta}</button>
            </a>
          ) : section.cta ? (
            <HashLink to={section.link}>
              <button className="cta-btn">{section.cta}</button>
            </HashLink>
          ) : (
            ""
          )}
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
