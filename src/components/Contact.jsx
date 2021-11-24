import {
  Bookmark,
  Facebook,
  Instagram,
  Phone,
  QueryBuilder,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact container">
      <div className="contact-info">
        <div className="map-wrapper" data-aos="fade-right">
          <iframe
            className="map"
            title="picardo-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2746988279614!2d-68.86379618421519!3d-32.89090467639983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09a97979ea49%3A0x90b33117622cd410!2sPicardo%20-%20Bar%2C%20Picadas%20y%20Amigos!5e0!3m2!1ses-419!2sar!4v1637689824769!5m2!1ses-419!2sar"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-links" data-aos="fade-left">
          <h2 className="contact-title">Contáctanos</h2>
          <div className="social">
            <div className="social-item">
              <WhatsApp />
              <p>2615358947</p>
            </div>
            <div className="social-item">
              <Instagram />
              <p>picardobar</p>
            </div>
            <div className="social-item">
              <Facebook />
              <p>picardo.bar</p>
            </div>
            <div className="social-item">
              <Phone />
              <p>4203805</p>
            </div>
            <div className="social-item">
              <Bookmark />
              <p>Reservas</p>
            </div>
            <div className="social-item">
              <QueryBuilder />
              <p>Martes a Domingo de 19:00 a 02:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
