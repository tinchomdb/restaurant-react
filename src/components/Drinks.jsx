import React from "react";
import "./Drinks.css";

import DrinkCategory from "./DrinkCategory";

function Bebidas({ products }) {
  const bebidasSinAlcohol = products
    .filter((bebida) => bebida.categories?.includes("bebidas sin alcohol"))
    .sort((a, b) => a.order - b.order);

  const cafeteria = products
    .filter((bebida) => bebida.categories?.includes("cafeteria"))
    .sort((a, b) => a.order - b.order);

  const cervezasLitro = products
    .filter((bebida) => bebida.categories?.includes("cerveza litro"))
    .sort((a, b) => a.order - b.order);

  const cervezasLongNeck = products
    .filter((bebida) => bebida.categories?.includes("long neck"))
    .sort((a, b) => a.order - b.order);

  const cervezasLata = products
    .filter((bebida) => bebida.categories?.includes("cerveza lata"))
    .sort((a, b) => a.order - b.order);

  const cervezasTirada = products
    .filter((bebida) => bebida.categories?.includes("cerveza tirada"))
    .sort((a, b) => a.order - b.order);

  const cervezasLataArtesanal = products
    .filter((bebida) => bebida.categories?.includes("cerveza artesanal lata"))
    .sort((a, b) => a.order - b.order);

  const tintos = products
    .filter((bebida) => bebida.categories?.includes("tintos"))
    .sort((a, b) => a.order - b.order);

  const blancos = products
    .filter((bebida) => bebida.categories?.includes("blancos"))
    .sort((a, b) => a.order - b.order);

  const rosados = products
    .filter((bebida) => bebida.categories?.includes("rosados"))
    .sort((a, b) => a.order - b.order);

  const dulces = products
    .filter((bebida) => bebida.categories?.includes("dulces"))
    .sort((a, b) => a.order - b.order);

  const espumantes = products
    .filter((bebida) => bebida.categories?.includes("espumantes"))
    .sort((a, b) => a.order - b.order);

  const cocktails = products
    .filter((bebida) => bebida.categories?.includes("cocktails"))
    .sort((a, b) => a.order - b.order);

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
      <DrinkCategory drinks={cervezasLongNeck} title="Cervezas Long Neck" />
      <DrinkCategory drinks={cervezasLata} title="Cerveza Lata" />
      <DrinkCategory drinks={cervezasTirada} title="Cerveza Tirada" />
      <DrinkCategory
        drinks={cervezasLataArtesanal}
        title="Cerveza Artesanal Lata"
      />
      <h2 className="carta-section-title ">Vinos</h2>
      <DrinkCategory drinks={tintos} title="Tintos" />
      <DrinkCategory drinks={blancos} title="Blancos" />
      <DrinkCategory drinks={rosados} title="Rosados" />
      <DrinkCategory drinks={dulces} title="Dulces" />
      <DrinkCategory drinks={espumantes} title="Espumantes" />
      <h2 className="carta-section-title ">Cocktails</h2>
      <DrinkCategory drinks={cocktails} title="Cocktails" />
    </div>
  );
}

export default Bebidas;
