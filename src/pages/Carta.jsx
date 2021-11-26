import React, { useEffect } from "react";
import "./Carta.css";
import Navbar from "../components/Navbar";
import Dishes from "../components/Dishes";
import Drinks from "../components/Drinks";
import Aos from "aos";

function Carta() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div
      className="carta-wrapper"
      style={{
        backgroundImage: `url("/img/chalkboard-background.jpg")`,
      }}
    >
      <div id="home" className="container">
        <Navbar />
        <Dishes />
        <Drinks />
      </div>
    </div>
  );
}

export default Carta;
