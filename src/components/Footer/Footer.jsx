import NavBar from "../NavBar/NavBar";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="" />
      <NavBar isFooter={true} />
    </div>
  );
};

export default Footer;
