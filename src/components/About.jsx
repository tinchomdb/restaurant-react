import React from "react";
import "./About.css";
import sections from "../data/sections";
import Section from "./Section";

function About() {
  let even = false;
  return (
    <div className="about-wrapper">
      {sections.map((item, index) => {
        if (index % 2 === 0) {
          even = true;
        } else {
          even = false;
        }

        return <Section section={item} key={index} even={even} />;
      })}
    </div>
  );
}

export default About;
