import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import "./Success.css";

function Success() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="success">
        <img
          className="success-image"
          src="https://i.imgur.com/dkkbMXk.png"
          alt=""
        />
        <p>
          Su pedido se ha realizado con éxito! <br></br> Nos comunicaremos a la
          brevedad para coordinar el pago.
        </p>
        <Button onClick={() => navigate("/#home")}>
          Volver a la página principal
        </Button>
      </div>
    </>
  );
}

export default Success;
