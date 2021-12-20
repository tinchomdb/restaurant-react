import React from "react";
import "./Carta.css";
import Navbar from "../components/Navbar";
import Dishes from "../components/Dishes";
import Drinks from "../components/Drinks";
import { useSelector } from "react-redux";

function Carta() {
  const storeProducts = useSelector((state) => state.products.productsItems);

  return (
    <div
      className="carta-wrapper"
      style={{
        backgroundImage: `url("/img/chalkboard-background.jpg")`,
      }}
    >
      <div id="home" className="container">
        <Navbar />
        <Dishes products={storeProducts} />
        <Drinks products={storeProducts} />
      </div>
    </div>
  );
}

export default Carta;
