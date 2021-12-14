import React, { useState } from "react";
import "./Picada.css";
import PriceItem from "./PriceItem";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";
import Popup from "./Popup";

function Picada({ picada, even }) {
  const [quantity, setQuantity] = useState(1);
  const [quantityHelp, setQuantityHelp] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const showPopupHandler = () => {
    setShowPopup(true);
    const timer = setTimeout(() => {
      setShowPopup(false);
      clearTimeout(timer);
    }, 3000);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuantityHelp(quantity, showPopupHandler());

    dispatch(addItemToCart({ ...picada, quantity }));
  };

  return (
    <div className="picada-wrapper">
      {showPopup && (
        <Popup text={`Se agregó al carrito ${quantityHelp} producto/s`} />
      )}
      <div className="picada container" data-aos="flip-up">
        <div
          className="picada-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h3>{picada?.title}</h3>
          <p>{picada?.description}</p>
          <div className="prices">
            {picada.size1 && (
              <PriceItem size={picada.size1} price={picada.price1} />
            )}

            {picada.size2 && (
              <PriceItem size={picada.size2} price={picada.price2} />
            )}

            {picada.size3 && (
              <PriceItem size={picada.size3} price={picada.price3} />
            )}

            {picada.price && (
              <PriceItem size={picada?.title} price={picada.price} />
            )}
          </div>
          {picada.categories?.includes("regalos") && (
            <form onSubmit={onSubmitHandler}>
              <input
                className="picada-input"
                onChange={(e) => setQuantity(+e.target.value)}
                id="amount"
                type="number"
                min="1"
                step="1"
                defaultValue="1"
              />
              <Button>Encargá</Button>
            </form>
          )}
        </div>

        <img
          className="picada-image"
          src={picada?.img}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Picada;
