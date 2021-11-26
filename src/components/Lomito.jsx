import React from "react";
import "./Lomito.css";
import PriceItem from "./PriceItem";

function Lomito({ lomito, even }) {
  return (
    <div className="lomito-wrapper">
      <div className="lomito-text" data-aos={even ? "fade-right" : "fade-left"}>
        <h3>{lomito?.title}</h3>
        <p>{lomito?.description}</p>
        <div className="prices">
          <PriceItem size="20 cm" price={lomito.chica} />
          <PriceItem size="30 cm" price={lomito.mediana} />
          <PriceItem size="50 cm" price={lomito.grande} />
        </div>
      </div>
    </div>
  );
}

export default Lomito;
