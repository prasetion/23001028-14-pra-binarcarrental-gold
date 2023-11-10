import "./style.css";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo></Logo>
      <div className="navbar-menu">
        <div>Our Services</div>
        <div>Why Us</div>
        <div>Testimonial</div>
        <div>FAQ</div>
      </div>
    </div>
  );
};

export default Navbar;
