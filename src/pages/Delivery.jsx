import React, { useEffect } from "react";
import "./Delivery.css";
import Navbar from "../components/Navbar";
import { deliverySections } from "../data/sections";
import Section from "../components/Section";
import Contact from "../components/Contact";
import Aos from "aos";

function Delivery() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-back",
    });
  }, []);

  let even = false;
  return (
    <div className="delivery" id="home">
      <Navbar />
      <div className="margin-top"></div>
      {deliverySections.map((item, index) => {
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
