import React from "react";
import "./Carta.css";
import Navbar from "../components/Navbar";
import Dishes from "../components/Dishes";
import Drinks from "../components/Drinks";
import { useSelector } from "react-redux";

function Carta() {
  const storeProducts = useSelector((state) => state.products.productsItems);
  const productsInStock = storeProducts.filter((item) => item.inStock);
  console.log("inStock", productsInStock);

  return (
    <div
      className="carta-wrapper"
      style={{
        backgroundImage: `url("/img/chalkboard-background.jpg")`,
      }}
    >
      <div id="home" className="container">
        <Navbar />
        <Dishes products={productsInStock} />
        <Drinks products={productsInStock} />
      </div>
    </div>
  );
}

export default Carta;
