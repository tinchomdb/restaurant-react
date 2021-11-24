import React from "react";
import Navbar from "../components/Navbar";
import Picada from "../components/Picada";
import picadas from "../data/picadas";
import { Parallax } from "react-parallax";
import "./Carta.css";

function Carta() {
  let even = false;
  return (
    <Parallax
      blur={1}
      bgImage="img/wood-background.jpg"
      bgImageAlt="the cat"
      strength={1000}
    >
      <div className="carta ">
        <Navbar />
        <div className="carta-section">
          <h2 className="carta-section-title container">Picadas</h2>
          {picadas.map((item, index) => {
            if (index % 2 === 0) {
              even = true;
            } else {
              even = false;
            }

            return <Picada picada={item} key={index} even={even} />;
          })}
        </div>
      </div>
    </Parallax>
  );
}

export default Carta;
