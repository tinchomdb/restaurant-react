import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2746988279614!2d-68.86379618424226!3d-32.890904676399835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09a97979ea49%3A0x90b33117622cd410!2sPicardo%20-%20Bar%2C%20Picadas%20y%20Amigos!5e0!3m2!1sen!2sar!4v1637677384721!5m2!1sen!2sar"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
