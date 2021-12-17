import React from "react";
import "./Porciones.css";

import Porcion from "../components/Porcion";

function Porciones({ porciones }) {
  const sortedPorciones = porciones.sort((a, b) => a.order - b.order);

  let even = false;
  return (
    <div className="carta-section">
      <h2 className="carta-section-title container">Porciones</h2>
      <div className="picadas-wrapper ">
        {sortedPorciones?.map((item, index) => {
          if (index % 2 === 0) {
            even = true;
          } else {
            even = false;
          }

          return <Porcion porcion={item} key={index} even={even} />;
        })}
      </div>
    </div>
  );
}

export default Porciones;
