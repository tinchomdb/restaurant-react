import React, { useEffect, useState } from "react";
import "./Carta.css";
import Navbar from "../components/Navbar";
import Dishes from "../components/Dishes";
import Drinks from "../components/Drinks";
import Aos from "aos";
import axios from "axios";

function Carta() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-back",
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://picardo-api.herokuapp.com/api/products"
      );

      setProducts(request.data);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="carta-wrapper"
      style={{
        backgroundImage: `url("/img/chalkboard-background.jpg")`,
      }}
    >
      <div id="home" className="container">
        <Navbar />
        <Dishes products={products} />
        <Drinks products={products} />
      </div>
    </div>
  );
}

export default Carta;
