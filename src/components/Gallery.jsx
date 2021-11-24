import React from "react";
import "./Gallery.css";
import GalleryPhoto from "./GalleryPhoto";
import picadas from "../data/picadas.js";

function Gallery() {
  return (
    <div className="gallery" data-aos="fade-up">
      <h2 className="gallery-title container">Galería</h2>
      <div className="gallery-wrapper">
        {picadas.map((picada, index) => (
          <GalleryPhoto picada={picada} key={picada.title} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
