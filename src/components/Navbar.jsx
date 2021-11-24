import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="navbar-wrapper">
      <div className="navbar container">
        <div className="navbar-header">
          {/* lOGO TEXT HERE */}
          <a href="/" className="navbar-brand">
            Picardo <span>.</span> Restaurant
          </a>
        </div>

        {/* <!-- MENU LINKS --> */}

        <ul className={toggleMenu ? "navbar-links active" : "navbar-links"}>
          <li>
            <a href="#home" className="smoothScroll">
              Inicio
            </a>
          </li>
          <li>
            <a href="#menu" className="smoothScroll">
              Carta
            </a>
          </li>
          <li>
            <a href="#team" className="smoothScroll">
              Delivery
            </a>
          </li>
          <li>
            <a href="#about" className="smoothScroll">
              Regalos
            </a>
          </li>

          <li>
            <a href="#contact" className="smoothScroll">
              Contacto
            </a>
          </li>
          <li id="nav-li-button">
            <a href="#footer" className="nav-button">
              Reservar
            </a>
          </li>
        </ul>

        <div
          className="toggle-button"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <Close /> : <Menu />}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
