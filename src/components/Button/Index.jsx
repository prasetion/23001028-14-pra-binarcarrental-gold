import "./style.css";
import { Link } from "react-router-dom";

const Button = ({ name, to }) => {
  return (
    <div>
      <Link to={to} className="container-button">
        {name}
      </Link>
    </div>
  );
};

export default Button;
