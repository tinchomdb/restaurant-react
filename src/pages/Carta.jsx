import React from "react";
import Navbar from "../components/Navbar";
import Picada from "../components/Picada";
import picadas from "../data/picadas";
import { Parallax, Background } from "react-parallax";

function Carta() {
  let even = false;
  return (
    <Parallax
      blur={1}
      bgImage="img/wood-background.jpg"
      bgImageAlt="the cat"
      strength={1000}
    >
      <div className="Carta">
        <Navbar />
        {picadas.map((item, index) => {
          if (index % 2 === 0) {
            even = true;
          } else {
            even = false;
          }

          return <Picada picada={item} key={index} even={even} />;
        })}
      </div>
    </Parallax>
  );
}

export default Carta;
