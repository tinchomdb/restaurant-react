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
          {lomito.size1 && (
            <PriceItem size={lomito.size1} price={lomito.price1} />
          )}

          {lomito.size2 && (
            <PriceItem size={lomito.size2} price={lomito.price2} />
          )}

          {lomito.size3 && (
            <PriceItem size={lomito.size3} price={lomito.price3} />
          )}

          {lomito.price && (
            <PriceItem size={lomito?.title} price={lomito.price} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Lomito;
