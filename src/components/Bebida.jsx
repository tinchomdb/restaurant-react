import React from "react";
import "./Bebida.css";

function Bebida({ bebida }) {
  return (
    <div className="bebida">
      <span className="bebida-title">{bebida?.title}</span>
      <span className="dotted-line"></span>
      <span>${bebida?.price}</span>
    </div>
  );
}

export default Bebida;
