import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import Button from "../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { Add, Close, DeleteForever, Remove } from "@mui/icons-material";
import { removeItemFromCart, decrement, increment } from "../store/cartSlice";

function Cart({ onClose }) {
  const items = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart">
        <div className="cart-list">
          <h4>Su Pedido</h4>

          {items.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="left-col">
                <img src={item.photo} alt="" className="item-photo" />
                <div
                  className="delete"
                  onClick={() => {
                    dispatch(removeItemFromCart(item.id));
                  }}
                >
                  Eliminar <DeleteForever />
                </div>
              </div>

              <div className="item-info">
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-price">${item.price}</span>
                <div className="cart-item-quantity-group">
                  <Remove onClick={() => dispatch(decrement(item.id))} />
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <Add onClick={() => dispatch(increment(item.id))} />
                </div>
              </div>
              <span className="cart-item-subtotal">
                ${item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>
        <div className="summary">
          <h4>Resumen</h4>
          <div className="summary-item">
            <span className="summary-item-title">Subtotal</span>
            <span className="summary-item-total">
              $
              {items.reduce(
                (prev, curr) => prev + curr.price * curr.quantity,
                0
              )}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-item-title">Envío</span>
            <span className="summary-item-total">$200</span>
          </div>
          <div className="cart-close" onClick={onClose}>
            <Close />
          </div>

          <Button onClick={onClose}>Continuar Compra</Button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Cart;
