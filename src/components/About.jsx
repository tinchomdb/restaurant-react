import React from "react";
import "./About.css";
import Section from "./Section";

function About({ sections }) {
  let even = false;

  const filteredSections = sections.filter((section) =>
    section.category?.includes("principal")
  );

  return (
    <div className="about-wrapper">
      {filteredSections?.map((item, index) => {
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
