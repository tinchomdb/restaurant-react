import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h2 className="gallery-title container">Galería</h2>
      <div className="gallery-wrapper">
        <div className="photo-wrapper">
          <img src="/img/tradicional.jpg" alt="" className="gallery-photo" />
        </div>
        <div className="photo-wrapper">
          <img src="/img/detacos.jpg" alt="" className="gallery-photo" />
        </div>
        <div className="photo-wrapper">
          <img src="/img/fondue.jpg" alt="" className="gallery-photo" />
        </div>
        <div className="photo-wrapper">
          <img src="/img/Onda verde.jpg" alt="" className="gallery-photo" />
        </div>
        <div className="photo-wrapper">
          <img
            src="/img/especial picardo.jpg"
            alt=""
            className="gallery-photo"
          />
        </div>
        <div className="photo-wrapper">
          <img src="/img/regalo1.jpg" alt="" className="gallery-photo" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
