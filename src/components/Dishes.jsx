import React from "react";
import "./Dishes";

import Picadas from "./Picadas";
import Lomitos from "./Lomitos";

function Platos() {
  return (
    <div className="Platos">
      <Picadas />
      <Lomitos />
    </div>
  );
}

export default Platos;
