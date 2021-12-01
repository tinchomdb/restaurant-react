import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { DeleteForever } from "@mui/icons-material";
import { removeItemFromCart, decrement, increment } from "../store/cartSlice";

function Cart({ onClose }) {
  const items = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart">
        <h4>Su Pedido</h4>
        <div className="cart-table-header">
          <span className="table-title">Producto</span>

          <span className="table-title">Cantidad:</span>
          <span className="table-title">Subotal:</span>
          <span className="table-title">Eliminar</span>
        </div>
        {items.map((item, index) => (
          <div className="cart-item" key={index}>
            <div>
              <span className="cart-item-title">{item.title}</span>
              <p className="cart-item-price">${item.price}</p>
            </div>
            <div className="cart-item-quantity-group">
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              <span className="cart-item-quantity">{item.quantity}</span>
              <button onClick={() => dispatch(increment(item.id))}>+</button>
            </div>
            <span className="cart-item-subtotal">
              ${item.price * item.quantity}
            </span>
            <div
              onClick={() => {
                dispatch(removeItemFromCart(item.id));
              }}
            >
              <DeleteForever />
            </div>
          </div>
        ))}

        <h4 className="cart-total">Total</h4>
        <span>
          {items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)}
        </span>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Cart;
