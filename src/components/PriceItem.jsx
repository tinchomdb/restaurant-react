import React from "react";
import "./PriceItem.css";

function PriceItem({ size, price }) {
  return (
    <div className="price-item">
      <span className="size">{size}</span>
      <span className="dotted-line"></span>
      <span className="price">${price}</span>
    </div>
  );
}

export default PriceItem;
