import "./Porcion.css";
import PriceItem from "./PriceItem";

function Porcion({ porcion, even }) {
  return (
    <div className="picada-wrapper">
      <div className="picada container" data-aos="flip-up">
        <div
          className="picada-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h3>{porcion?.title}</h3>
          <p>{porcion?.description}</p>
          <div className="prices">
            {porcion.size1 && (
              <PriceItem size={porcion.size1} price={porcion.price1} />
            )}

            {porcion.size2 && (
              <PriceItem size={porcion.size2} price={porcion.price2} />
            )}

            {porcion.size3 && (
              <PriceItem size={porcion.size3} price={porcion.price3} />
            )}

            {porcion.price && (
              <PriceItem size={porcion?.title} price={porcion.price} />
            )}
          </div>
        </div>

        <img
          className="picada-image"
          src={porcion?.img}
          alt=""
          data-aos={even ? "fade-left" : "fade-right"}
        />
      </div>
    </div>
  );
}

export default Porcion;
