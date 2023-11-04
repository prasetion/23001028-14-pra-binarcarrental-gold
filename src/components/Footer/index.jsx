import "./style.css";
import {
  footerAddress,
  footerNavigation,
  footerIcons,
} from "../../datas/FooterData";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-vertical footer-container-child">
        {footerAddress.map((item) => (
          <div key={item.key} className="footer-bold">
            {item}
          </div>
        ))}
      </div>
      <div className="footer-container-vertical">
        {footerNavigation.map((item) => (
          <div key={item.key}>{item}</div>
        ))}
      </div>
      <div className="footer-container-vertical footer-container-child">
        <div className="footer-bold">Connect with us</div>
        <div className="footer-icon">
          {footerIcons.map((item) => (
            <div key={item.key}>{item}</div>
          ))}
        </div>
      </div>
      <div className="footer-container-vertical footer-container-child">
        <div className="footer-bold">Copyright Binar 2022</div>
        <div>image</div>
      </div>
    </div>
  );
};

export default Footer;
