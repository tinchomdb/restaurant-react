import React from "react";
import "./Picadas.css";

import Picada from "../components/Picada";

function Picadas({ picadas }) {
  const sortedPicadas = picadas.sort((a, b) => a.order - b.order);

  let even = false;
  return (
    <div className="carta-section">
      <h2 className="carta-section-title container">Picadas</h2>
      <div className="picadas-container">
        {sortedPicadas?.map((item, index) => {
          if (index % 2 === 0) {
            even = true;
          } else {
            even = false;
          }

          return <Picada picada={item} key={index} even={even} />;
        })}
      </div>
    </div>
  );
}

export default Picadas;
