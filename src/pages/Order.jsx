import { useState } from "react";
import "./Order.css";
import FormInput from "../components/FormInput";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
import { deleteCart } from "../store/cartSlice";

const Order = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const products = items.map((item) => ({
    productName: item.title,
    quantity: item.quantity,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    address: "",
    phone: "",
    time: "",
    nameSender: "",
    phoneSender: "",
  });

  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: "Nombre de quien recibe",
      errorMessage: "El nombre debe ser de al menos 3 caracteres, sin sìmbolos",
      label: "Nombre y Apellido",
      required: true,
    },
    {
      name: "address",
      type: "text",
      placeholder: "Calle 123, depto A, Mendoza Capital, ",
      errorMessage: "Este campo es requerido",
      label: "Dirección de Entrega",
      required: true,
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "123456",
      errorMessage: "Este campo es requerido",
      label: "Teléfono de quien recibe",
      required: true,
    },
    {
      name: "time",
      type: "datetime-local",
      placeholder: "",
      label: "Fecha y hora de entrega",
      required: true,
    },

    {
      name: "nameSender",
      type: "text",
      placeholder: "Nombre y apellido",
      errorMessage: "El nombre debe ser de al menos 3 caracteres, sin sìmbolos",
      label: "Nombre y Apellido de quien envía",
      required: true,
    },
    {
      name: "phoneSender",
      type: "tel",
      placeholder: "123456",
      errorMessage: "Este campo es requerido",
      label: "Teléfono de quien envía",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const postOrder = async () => {
      const res = await axios.post(
        "https://picardo-api.herokuapp.com/api/orders",
        newOrder
      );

      if (res.status === 200) {
        dispatch(deleteCart());
        navigate("/exito");
      } else {
        navigate("/error");
      }
    };

    const newOrder = {
      ...values,
      products: products,
      deliveryCost: delivery,
      total: total,
    };

    postOrder();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const subtotal = items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  //DELIVERY TO BE FIXED
  const delivery = 200;
  const total = subtotal + delivery;

  return (
    <>
      <Navbar />
      <div className="order">
        <form onSubmit={handleSubmit}>
          <h1>Datos de entrega</h1>
          {inputs.map((input, index) => (
            <FormInput
              key={index}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="order-cart-list">
            <h4>Su Pedido</h4>

            {items.length > 0
              ? items.map((item, index) => (
                  <div className="order-cart-item" key={index}>
                    <div className="order-left-col">
                      <img src={item.img} alt="" className="order-item-photo" />
                    </div>
                    <div className="order-right-col">
                      <div className="order-item-info">
                        <span className="order-cart-item-title">
                          {item.title}
                        </span>
                        <span className="order-cart-item-price">
                          Precio: ${item.price}
                        </span>
                        <div className="order-cart-item-quantity-group">
                          <span className="order-cart-item-quantity">
                            Cantidad: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <span className="order-cart-item-subtotal">
                        Subtotal: ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                ))
              : "Carrito Vacío"}
            <div className="summary-item">
              <span className="summary-item-title">Productos</span>
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
          </div>
          <button>Confirmar Pedido</button>
        </form>
      </div>
    </>
  );
};

export default Order;
