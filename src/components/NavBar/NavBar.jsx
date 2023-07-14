/* eslint-disable react/prop-types */
import "./NavBar.css";
import cartIcon from "../../assets/cart-icon.svg";

const NavBar = ({ isFooter }) => {
  return (
    <div className="NavBar">
      <a className="link navbar-link" href="#catalog">
        Каталог
      </a>
      <a className="link navbar-link" href="#aboutUs">
        О нас
      </a>
      <a className="link navbar-link" href="#survey">
        Подбор товара
      </a>
      <a className="link navbar-link" href="#team">
        Наша команда
      </a>
      <a className="link navbar-link" href="#FAQ">
        Доставка и оплата
      </a>
      {isFooter ? (
        <a className="link navbar-link" href="#contacts">
          Контакты
        </a>
      ) : (
        <div className="cart-link">
          <span className="navbar-link">Корзина</span>{" "}
          <img src={cartIcon} alt="" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
