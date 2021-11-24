import React from "react";
import "./Picada.css";

function Picada({ picada, even }) {
  return (
    <div className="picada-wrapper">
      <div className="picada container">
        <div
          className="picada-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h2>{picada?.title}</h2>
          <p>{picada?.description}</p>
        </div>

        <img
          className="picada-image"
          src={picada?.photo}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Picada;
