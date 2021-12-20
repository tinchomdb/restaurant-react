import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useNavigate } from "react-router";

function Success() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        Su pedido se ha realizado con éxito. Nos comunicaremos a la brevedad
        para coordinar el pago.
      </div>
      <Button onClick={() => navigate("/#home")}>
        Volver a la página principal
      </Button>
    </>
  );
}

export default Success;
