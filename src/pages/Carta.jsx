import React from "react";
import Navbar from "../components/Navbar";
import Picada from "../components/Picada";
import Lomito from "../components/Lomito";
import picadas from "../data/picadas";
import lomitos from "../data/lomitos";
import bebidas from "../data/bebidas";
import { Parallax } from "react-parallax";
import "./Carta.css";
import Bebida from "../components/Bebida";

const bebidasSinAlcohol = bebidas.filter(
  (bebida) => bebida.category === "Bebidas sin Alcohol"
);
console.log(bebidasSinAlcohol);

const cafeteria = bebidas.filter((bebida) => bebida.category === "Cafetería");
console.log(cafeteria);

const cervezasLitro = bebidas.filter(
  (bebida) => bebida.category === "Cerveza Litro"
);
console.log(cervezasLitro);

const cervezaLongNeck = bebidas.filter(
  (bebida) => bebida.category === "Cerveza Long Neck"
);
console.log(cervezaLongNeck);

const cervezasLata = bebidas.filter((bebida) => bebida.category === "Lata");
console.log(cervezasLata);

const cervezasTirada = bebidas.filter((bebida) => bebida.category === "Tirada");
console.log(cervezasTirada);

const cervezasLataArtesanal = bebidas.filter(
  (bebida) => bebida.category === "Lata Artesanal"
);
console.log(cervezasLataArtesanal);

function Carta() {
  let even = false;
  return (
    <Parallax
      blur={0}
      bgImage="img/wood-background.jpg"
      bgImageAlt="wood"
      strength={500}
    >
      <div className="carta ">
        <Navbar />
        <div id="home">a</div>
        <div className="carta-section">
          <h2 className="carta-section-title container">Picadas</h2>
          {picadas.map((item, index) => {
            if (index % 2 === 0) {
              even = true;
            } else {
              even = false;
            }

            return <Picada picada={item} key={index} even={even} />;
          })}
        </div>
        <div className="carta-section container">
          <h2 className="carta-section-title ">Sandwichs</h2>
          <div className="lomitos-wrapper ">
            {lomitos.map((item, index) => {
              if (index % 2 === 0) {
                even = true;
              } else {
                even = false;
              }

              return <Lomito lomito={item} key={index} even={even} />;
            })}
          </div>
        </div>
        <div className="carta-section ">
          <h2 className="carta-section-title ">Bebidas sin Alcohol</h2>
          <div className="category-wrapper ">
            <div className="category container">
              <h3 className="category-title ">Gaseosas, Aguas y Jugos</h3>
              <div className="items-wrapper ">
                {bebidasSinAlcohol.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="category-wrapper">
            <div className="category container">
              <h3 className="category-title ">Cafetería</h3>
              <div className="items-wrapper ">
                {cafeteria.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>

          <h2 className="carta-section-title ">Cervezas</h2>
          <div className="category-wrapper">
            <div className="category container">
              <h3 className="category-title">Cervezas de Litro</h3>
              <div className="items-wrapper">
                {cervezasLitro.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="category-wrapper">
            <div className="category container">
              <h3 className="category-title">Cervezas Long Neck</h3>
              <div className="category-wrapper ">
                {cervezaLongNeck.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="category-wrapper">
            <div className="category container">
              <h3 className="category-title">Cerveza Lata</h3>
              <div className="category-wrapper ">
                {cervezasLata.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="category-wrapper">
            <div className="category container">
              <h3 className="category-title">Cerveza Tirada</h3>
              <div className="category-wrapper ">
                {cervezasTirada.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="category-wrapper">
            <div className="category container">
              <h3 className="category-title">Cerveza Artesanal Lata</h3>
              <div className="category-wrapper ">
                {cervezasLataArtesanal.map((item, index) => {
                  return <Bebida bebida={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Carta;
