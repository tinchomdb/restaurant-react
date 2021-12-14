import React, { useEffect, useState } from "react";
import "./Picadas.css";

import Picada from "../components/Picada";
import picadas from "../data/picadas";
import axios from "axios";

function Picadas() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://picardo-api.herokuapp.com/api/products"
      );
      const filteredProducts = request.data.filter((picada) =>
        picada.categories?.includes("picadas")
      );
      setProducts(filteredProducts);

      return request;
    }
    fetchData();
  }, []);

  console.log(products);

  let even = false;
  return (
    <div className="carta-section">
      <h2 className="carta-section-title container">Picadas</h2>
      {products?.map((item, index) => {
        if (index % 2 === 0) {
          even = true;
        } else {
          even = false;
        }

        return <Picada picada={item} key={index} even={even} />;
      })}
    </div>
  );
}

export default Picadas;
