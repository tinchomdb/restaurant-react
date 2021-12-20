import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Section.css";

function Section({ section, even }) {
  return (
    <div className="section-wrapper" id={section._id}>
      <div className="section container">
        <div
          className="section-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h4>{section?.subtitle}</h4>
          <h2>{section?.title}</h2>
          <p>{section?.description}</p>
          {!section.isInterno && section.linkText && section.url ? (
            <a href={section.url} target="_blank" rel="noreferrer">
              <button className="cta-btn">{section.linkText}</button>
            </a>
          ) : section.linkText && section.url ? (
            <HashLink to={section.url}>
              <button className="cta-btn">{section.linkText}</button>
            </HashLink>
          ) : (
            ""
          )}
        </div>

        <img
          className="section-image"
          src={section?.img}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Section;
