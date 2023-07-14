import "./Header.css";
import logo from "../../assets/logo.svg";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="Header-content">
        <img src={logo} alt="" />
        <NavBar isFooter={false} />
      </div>
    </div>
  );
};

export default Header;
