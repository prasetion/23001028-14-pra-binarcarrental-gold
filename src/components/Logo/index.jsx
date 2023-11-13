import logo from "../../assets/images/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
