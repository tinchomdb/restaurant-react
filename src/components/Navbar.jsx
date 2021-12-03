import React, { useState } from "react";
import "./Navbar.css";
import { Close, Menu, ShoppingCart } from "@mui/icons-material";
import { HashLink as Link } from "react-router-hash-link";
import { useSelector } from "react-redux";
import Cart from "../pages/Cart";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <section className="navbar-wrapper">
      <nav className="navbar container">
        <div className="navbar-header">
          <Link to="/#home" className="navbar-brand">
            Picardo <span>.</span> Restaurant
          </Link>
        </div>
        <ul className={toggleMenu ? "navbar-links active" : "navbar-links"}>
          <Link to="/#home">
            <li>Inicio</li>
          </Link>
          <Link to="/carta#home">
            <li>Carta</li>
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

        {cartIsOpen && <Cart onClose={() => setCartIsOpen(false)} />}

        <div className="options-container">
          <div className="cart-button" onClick={() => setCartIsOpen(true)}>
            <ShoppingCart />
            <span className="cart-badge">
              {items.reduce((prev, curr) => prev + curr.quantity, 0)}
            </span>
          </div>
          <div
            className="toggle-button"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? <Close /> : <Menu />}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
