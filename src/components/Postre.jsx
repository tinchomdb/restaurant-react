import PriceItem from "./PriceItem";

function Postre({ postre, even }) {
  return (
    <div className={postre.img ? "picada-wrapper" : "picada-wrapper no-image"}>
      <div className="picada container" data-aos="flip-up">
        <div
          className="picada-text"
          data-aos={even ? "fade-right" : "fade-left"}
        >
          <h3>{postre?.title}</h3>
          <p>{postre?.description}</p>
          <div className="prices">
            {postre.size1 && (
              <PriceItem size={postre.size1} price={postre.price1} />
            )}

            {postre.size2 && (
              <PriceItem size={postre.size2} price={postre.price2} />
            )}

            {postre.size3 && (
              <PriceItem size={postre.size3} price={postre.price3} />
            )}

            {postre.price && (
              <PriceItem size={postre?.title} price={postre.price} />
            )}
          </div>
        </div>

        {postre.img && (
          <img
            className="picada-image"
            src={postre.img}
            alt=""
            data-aos={even ? "fade-left" : "fade-right"}
          />
        )}
      </div>
    </div>
  );
}

export default Postre;
