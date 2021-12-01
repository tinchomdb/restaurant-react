import React, { useState } from "react";
import "./Picada.css";
import PriceItem from "./PriceItem";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

function Picada({ picada, even }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="picada-wrapper">
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
            <>
              <input
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                id="amount"
                type="number"
                min="1"
                step="1"
                defaultValue="1"
              />
              <Button
                onClick={() => dispatch(addItemToCart({ ...picada, quantity }))}
              >
                Encargá
              </Button>
            </>
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
