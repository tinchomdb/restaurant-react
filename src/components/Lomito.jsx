import React from "react";
import "./Lomito.css";

function Lomito({ lomito, even }) {
  return (
    <div className="lomito-wrapper">
      <div className="lomito-text" data-aos={even ? "fade-right" : "fade-left"}>
        <h3>{lomito?.title}</h3>
        <p>{lomito?.description}</p>
        <div className="prices">
          <div className="price-item">
            <span className="size">20 cm</span>
            <span className="price">${lomito.chica}</span>
          </div>

          <div className="price-item">
            <span className="size">30 cm</span>
            <span className="price">${lomito.mediana}</span>
          </div>

          <div className="price-item">
            <span className="size">50 cm</span>
            <span className="price">${lomito.grande}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lomito;
