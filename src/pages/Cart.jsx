import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import Button from "../components/Button";

import { useDispatch, useSelector } from "react-redux";
import { Add, Close, DeleteForever, Remove } from "@mui/icons-material";
import { removeItemFromCart, decrement, increment } from "../store/cartSlice";

function Cart({ onClose }) {
  const items = useSelector((state) => state.cart.cartItems);
  console.log("items", items);

  const dispatch = useDispatch();
  const subtotal = items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  //DELIVERY TO BE FIXED
  const delivery = 200;
  const total = subtotal + delivery;

  return ReactDOM.createPortal(
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart">
        <div className="cart-list">
          <h4>Su Pedido</h4>
          {console.log("item0", items[0])}
          {items.length > 0
            ? items.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="left-col">
                    <img src={item.img} alt="" className="item-photo" />
                    <div
                      className="delete"
                      onClick={() => {
                        dispatch(removeItemFromCart(item._id));
                      }}
                    >
                      Eliminar <DeleteForever />
                    </div>
                  </div>

                  <div className="item-info">
                    <span className="cart-item-title">{item.title}</span>
                    <span className="cart-item-price">${item.price}</span>
                    <div className="cart-item-quantity-group">
                      <Remove onClick={() => dispatch(decrement(item._id))} />
                      <span className="cart-item-quantity">
                        {item.quantity}
                      </span>
                      <Add onClick={() => dispatch(increment(item._id))} />
                    </div>
                  </div>
                  <span className="cart-item-subtotal">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))
            : "Carrito Vacío"}
        </div>
        <div className="summary">
          <h4>Resumen</h4>
          <div className="summary-item">
            <span className="summary-item-title">Subtotal</span>
            <span className="summary-item-total">${subtotal}</span>
          </div>
          <div className="summary-item">
            <span className="summary-item-title">Envío</span>
            <span className="summary-item-total">${delivery}</span>
          </div>
          <div className="summary-item">
            <span className="summary-item-title">Total</span>
            <span className="summary-item-total">${total}</span>
          </div>
          <div className="cart-close" onClick={onClose}>
            <Close />
          </div>

          <Button onClick={onClose}>Confirmar Pedido</Button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Cart;
