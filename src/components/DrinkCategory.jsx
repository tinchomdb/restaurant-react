import React from "react";
import "./DrinkCategory.css";
import Drink from "./Drink";

function DrinkCategory({ drinks, title }) {
  return (
    <div className="category-wrapper" data-aos="flip-up">
      <div className="category container">
        <h3 className="category-title ">{title}</h3>
        <div className="items-wrapper ">
          {drinks.map((item, index) => {
            return <Drink bebida={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DrinkCategory;
