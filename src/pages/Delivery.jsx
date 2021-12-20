import React from "react";
import "./Delivery.css";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Contact from "../components/Contact";
import { useSelector } from "react-redux";

function Delivery() {
  const storeSections = useSelector((state) => state.sections.sectionsItems);
  const filteredSections = storeSections.filter((section) =>
    section.category?.includes("delivery")
  );

  let even = false;
  return (
    <div className="delivery" id="home">
      <Navbar />
      <div className="margin-top"></div>
      {filteredSections?.map((item, index) => {
        if (index % 2 === 0) {
          even = true;
        } else {
          even = false;
        }

        return <Section section={item} key={index} even={even} />;
      })}
      <Contact />
    </div>
  );
}

export default Delivery;
