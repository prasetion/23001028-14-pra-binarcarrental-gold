import Button from "../Button";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-title">Sewa Mobil di (Lokasimu) Sekarang</div>
      <div className="banner-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </div>
      <div className="banner-button">
        <Button name={"Mulai Sewa Mobil"}></Button>
      </div>
    </div>
  );
};

export default Banner;
