import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Picada from "../components/Picada";

function Regalos() {
  const storeProducts = useSelector((state) => state.products.productsItems);
  const filteredProducts = storeProducts.filter((product) =>
    product.categories?.includes("regalos")
  );

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
          {filteredProducts?.map((item, index) => {
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
