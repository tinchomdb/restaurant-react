import React from "react";
import "./GalleryPhoto.css";

function GalleryPhoto({ picada }) {
  return (
    <div className="photo-wrapper">
      <img src={picada?.photo} alt="" className="gallery-photo" />
      <div className="photo-text-wrapper">
        <div className="photo-text">
          <h3>{picada?.title}</h3>
          <span>Desde ${picada?.chica}</span>
        </div>
      </div>
    </div>
  );
}

export default GalleryPhoto;
