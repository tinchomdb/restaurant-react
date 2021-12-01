import { Close, Menu, ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <section className="navbar-wrapper">
      <div className="navbar container">
        <div className="navbar-header">
          {/* lOGO TEXT HERE */}
          <Link to="/#home" className="navbar-brand">
            Picardo <span>.</span> Restaurant
          </Link>
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
          <Link to="/delivery#home">
            <li>Delivery</li>
          </Link>
          <Link to="/regalos#home">
            <li>Regalos</li>
          </Link>
          <Link to="/#contacto">
            <li>Contacto</li>
          </Link>
          <li id="nav-li-button">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJRF1KuAr37zNhg6Uf8PMg4zMD6STU94YG_hayhhidQw6ynw/viewform"
              className="nav-button"
              target="_blank"
              rel="noreferrer"
            >
              Reservar
            </a>
          </li>
        </ul>
        <div className="cart-button" onClick={() => setCartIsOpen(true)}>
          <ShoppingCart />
          <span className="cart-badge">
            {items.reduce((prev, curr) => prev + curr.quantity, 0)}
          </span>
        </div>
        {cartIsOpen && <Cart onClose={() => setCartIsOpen(false)} />}

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
