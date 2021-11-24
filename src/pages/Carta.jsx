import React from "react";
import Navbar from "../components/Navbar";
import Picada from "../components/Picada";
import Lomito from "../components/Lomito";
import picadas from "../data/picadas";
import lomitos from "../data/lomitos";
import { Parallax } from "react-parallax";
import "./Carta.css";

function Carta() {
  let even = false;
  return (
    <Parallax
      blur={0}
      bgImage="img/wood-background.jpg"
      bgImageAlt="wood"
      strength={500}
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
        <div className="carta-section container">
          <h2 className="carta-section-title ">Sandwichs</h2>
          <div className="lomitos-wrapper ">
            {lomitos.map((item, index) => {
              if (index % 2 === 0) {
                even = true;
              } else {
                even = false;
              }

              return <Lomito lomito={item} key={index} even={even} />;
            })}
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Carta;
