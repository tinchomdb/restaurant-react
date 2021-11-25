import { Close, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

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
          <Link to="/#home">
            <li>Inicio</li>
          </Link>
          <Link to="/carta#home">
            <li>
              <span href="#menu" className="smoothScroll">
                Carta
              </span>
            </li>
          </Link>
          <li>
            <a href="#a" className="smoothScroll">
              Delivery
            </a>
          </li>
          <li>
            <a href="#a" className="smoothScroll">
              Regalos
            </a>
          </li>

          <li>
            <a href="#contact" className="smoothScroll">
              Contacto
            </a>
          </li>
          <li id="nav-li-button">
            <a href="#a" className="nav-button">
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
