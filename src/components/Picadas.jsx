import React from "react";
import "./Picadas.css";

import Picada from "../components/Picada";
import picadas from "../data/picadas";

function Picadas() {
  let even = false;
  return (
    <div className="carta-section">
      <h2 className="carta-section-title container">Picadas</h2>
      {picadas?.map((item, index) => {
        if (index % 2 === 0) {
          even = true;
        } else {
          even = false;
        }

        return <Picada picada={item} key={index} even={even} />;
      })}
    </div>
  );
}

export default Picadas;
