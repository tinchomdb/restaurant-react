import React from "react";
import "./Popup.css";

function Popup({ text }) {
  return (
    <div className="popup">
      <span>{text}</span>
    </div>
  );
}

export default Popup;
