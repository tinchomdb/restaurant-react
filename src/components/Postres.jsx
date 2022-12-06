import React from "react";

import Postre from "../components/Postre";

function Postres({ postres, title = "Postres" }) {
  const sortedPostres = postres.sort((a, b) => a.order - b.order);

  let even = false;
  return (
    <div className="carta-section">
      <h2 className="carta-section-title container">{title}</h2>
      <div className="picadas-wrapper ">
        {sortedPostres?.map((item, index) => {
          if (index % 2 === 0) {
            even = true;
          } else {
            even = false;
          }

          return <Postre postre={item} key={index} even={even} />;
        })}
      </div>
    </div>
  );
}

export default Postres;
