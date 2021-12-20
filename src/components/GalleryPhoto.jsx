import React from "react";
import "./GalleryPhoto.css";

function GalleryPhoto({ picada }) {
  return (
    <div className="photo-wrapper" data-aos="zoom-in-up">
      <img src={picada?.img} alt="" className="gallery-photo" />
      <div className="photo-text-wrapper">
        <div className="photo-text">
          <h3>{picada?.title}</h3>
          <span>Desde ${picada?.price1 || picada?.price}</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryPhoto;
