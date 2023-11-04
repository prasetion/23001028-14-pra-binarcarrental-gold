import "./style.css";
import {
  footerAddress,
  footerNavigation,
  footerIcons,
} from "../../datas/FooterData";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="footer-container container-section">
      <div className="footer-container-vertical footer-container-child">
        {footerAddress.map((item, index) => (
          <div key={index} className="footer-bold">
            {item}
          </div>
        ))}
      </div>
      <div className="footer-container-vertical">
        {footerNavigation.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div className="footer-container-vertical footer-container-child">
        <div className="footer-bold">Connect with us</div>
        <div className="footer-icon">
          {footerIcons.map((item, index) => (
            <img src={item} key={index}></img>
          ))}
        </div>
      </div>
      <div className="footer-container-vertical footer-container-child">
        <div className="footer-bold">Copyright Binar 2022</div>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
