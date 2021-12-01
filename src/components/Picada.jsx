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
            {picada.chica && (
              <PriceItem size="Chica (Come 1)" price={picada.chica} />
            )}

            {picada.mediana && (
              <PriceItem size="Mediana (Comen 2)" price={picada.mediana} />
            )}

            {picada.grande && (
              <PriceItem size="Grande (Comen 3)" price={picada.grande} />
            )}

            {picada.extra && (
              <PriceItem size="Extra Grande (Comen 4)" price={picada.extra} />
            )}

            {picada.precio && (
              <PriceItem size="Extra Grande (Comen 4)" price={picada.price} />
            )}
          </div>
          {picada.category?.includes("regalos") && (
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
          src={picada?.photo}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Picada;
