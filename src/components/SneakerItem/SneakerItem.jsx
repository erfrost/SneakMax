/* eslint-disable react/no-unescaped-entities */
import "./SkeakerItem.css";
import view from "../../assets/viewItem.svg";
import inCart from "../../assets/addInCart.svg";

const SneakerItem = () => {
  return (
    <div className="SkeakerItem">
      <div className="sneaker-image">
        <img src={view} alt="" className="sneaker-icon" />
        <img src={inCart} alt="" className="sneaker-icon" />
      </div>
      <span className="sneaker-title">Кроссовки Nike Air Force 1 '07 QS</span>
      <span className="sneaker-price">11 000 р</span>
    </div>
  );
};

export default SneakerItem;
