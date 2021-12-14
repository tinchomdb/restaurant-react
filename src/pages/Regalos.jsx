import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Picada from "../components/Picada";
import picadas from "../data/picadas";

const picadasRegalo = picadas.filter((picada) =>
  picada.categories?.includes("regalos")
);

function Regalos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://picardo-api.herokuapp.com/api/products"
      );

      const filteredProducts = request.data.filter((picada) =>
        picada.categories?.includes("regalos")
      );

      setProducts(filteredProducts);

      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-back",
    });
  }, []);
  let even = false;
  return (
    <div
      className="carta-wrapper"
      style={{
        backgroundImage: `url("/img/chalkboard-background.jpg")`,
      }}
    >
      <div id="home" className="container">
        <Navbar />
        <div className="carta-section">
          <h2 className="carta-section-title container">Regalos</h2>
          {products?.map((item, index) => {
            if (index % 2 === 0) {
              even = true;
            } else {
              even = false;
            }

            return <Picada picada={item} key={index} even={even} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Regalos;
