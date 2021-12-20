import React from "react";
import "./Gallery.css";
import GalleryPhoto from "./GalleryPhoto";
import { useSelector } from "react-redux";

function Gallery() {
  const storeProducts = useSelector((state) => state.products.productsItems);
  const filteredProducts = storeProducts.filter(
    (product) => product.showOnGallery
  );

  return (
    <div className="gallery" data-aos="fade-up">
      <h2 className="gallery-title container">Galería</h2>
      <div className="gallery-wrapper">
        {filteredProducts.map((picada, index) => (
          <GalleryPhoto picada={picada} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
