import React from "react";
import "./Picada.css";

function Picada({ picada, even }) {
  return (
    <div className="picada-wrapper">
      <div className="picada container" data-aos="flip-up">
        <div
          className="picada-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h3>{picada?.title}</h3>
          <p>{picada?.description}</p>
          <div className="prices">
            {picada.chica ? (
              <div className="price-item">
                <span className="size">Chica</span>
                <span className="price">${picada.chica}</span>
                <span>Come 1</span>
              </div>
            ) : (
              ""
            )}

            {picada.mediana ? (
              <div className="price-item">
                <span className="size">Mediana</span>
                <span className="price">${picada.mediana}</span>
                <span>Comen 2</span>
              </div>
            ) : (
              ""
            )}

            {picada.grande ? (
              <div className="price-item">
                <span className="size">Grande</span>
                <span className="price">${picada.grande}</span>
                <span>Comen 3</span>
              </div>
            ) : (
              ""
            )}

            {picada.extra ? (
              <div className="price-item">
                <span className="size">Extra Grande</span>
                <span className="price">${picada.extra}</span>
                <span>Comen 4</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <img
          className="picada-image"
          src={picada?.photo}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Picada;
