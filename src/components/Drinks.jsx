import React from "react";
import "./Drinks.css";
import {
  bebidasSinAlcohol,
  cafeteria,
  cervezasLitro,
  cervezaLongNeck,
  cervezasLata,
  cervezasTirada,
  cervezasLataArtesanal,
} from "../data/bebidas";
import DrinkCategory from "./DrinkCategory";

function Bebidas() {
  return (
    <div className="carta-section ">
      <h2 className="carta-section-title ">Bebidas sin Alcohol</h2>
      <DrinkCategory
        drinks={bebidasSinAlcohol}
        title="Gaseosas, Aguas y Jugos"
      />
      <DrinkCategory drinks={cafeteria} title="Cafetería" />

      <h2 className="carta-section-title ">Cervezas</h2>
      <DrinkCategory drinks={cervezasLitro} title="Cervezas de Litro" />
      <DrinkCategory drinks={cervezaLongNeck} title="Cervezas Long Neck" />
      <DrinkCategory drinks={cervezasLata} title="Cerveza Lata" />
      <DrinkCategory drinks={cervezasTirada} title="Cerveza Tirada" />
      <DrinkCategory
        drinks={cervezasLataArtesanal}
        title="Cerveza Artesanal Lata"
      />
    </div>
  );
}

export default Bebidas;
