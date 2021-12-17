import React from "react";
import "./Lomitos.css";
import Lomito from "../components/Lomito";

function Lomitos({ lomitos }) {
  const sortedLomitos = lomitos.sort((a, b) => a.order - b.order);

  let even = false;
  return (
    <div className="carta-section container">
      <h2 className="carta-section-title ">Sandwichs</h2>
      <div className="lomitos-wrapper ">
        {sortedLomitos.map((item, index) => {
          if (index % 2 === 0) {
            even = true;
          } else {
            even = false;
          }

          return <Lomito lomito={item} key={index} even={even} />;
        })}
      </div>
    </div>
  );
}

export default Lomitos;
