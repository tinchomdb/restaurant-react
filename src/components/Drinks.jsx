import React from "react";
import "./Drinks.css";

import DrinkCategory from "./DrinkCategory";

function Bebidas({ products }) {
  const bebidasSinAlcohol = products.filter((bebida) =>
    bebida.categories?.includes("bebidas sin alcohol")
  );

  const cafeteria = products.filter((bebida) =>
    bebida.categories?.includes("cafeteria")
  );
  const cervezasLitro = products.filter((bebida) =>
    bebida.categories?.includes("cerveza litro")
  );
  const cervezasLongNeck = products.filter((bebida) =>
    bebida.categories?.includes("long neck")
  );
  const cervezasLata = products.filter((bebida) =>
    bebida.categories?.includes("cerveza lata")
  );

  const cervezasTirada = products.filter((bebida) =>
    bebida.categories?.includes("cerveza tirada")
  );

  const cervezasLataArtesanal = products.filter((bebida) =>
    bebida.categories?.includes("cerveza artesanal lata")
  );

  const tintos = products.filter((bebida) =>
    bebida.categories?.includes("tintos")
  );
  const blancos = products.filter((bebida) =>
    bebida.categories?.includes("blancos")
  );
  const rosados = products.filter((bebida) =>
    bebida.categories?.includes("rosados")
  );
  const dulces = products.filter((bebida) =>
    bebida.categories?.includes("dulces")
  );
  const espumantes = products.filter((bebida) =>
    bebida.categories?.includes("espumantes")
  );

  const cocktails = products.filter((bebida) =>
    bebida.categories?.includes("cocktails")
  );
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
