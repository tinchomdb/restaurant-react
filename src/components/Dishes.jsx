import React from "react";
import "./Dishes";

import Picadas from "./Picadas";
import Lomitos from "./Lomitos";
import Porciones from "./Porciones";
import Postres from "./Postres";

function Platos({ products }) {
  const picadas = products.filter((picada) =>
    picada.categories?.includes("picadas")
  );

  const lomitos = products.filter((lomito) =>
    lomito.categories?.includes("lomitos")
  );

  const porciones = products.filter((porcion) =>
    porcion.categories?.includes("porciones")
  );

  const postres = products.filter((postre) =>
    postre.categories?.includes("postres")
  );

  return (
    <div className="Platos">
      <Picadas picadas={picadas} />
      <Lomitos lomitos={lomitos} />
      <Porciones porciones={porciones} />
      <Postres postres={postres} />
    </div>
  );
}

export default Platos;
