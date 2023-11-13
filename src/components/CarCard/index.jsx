import Button from "../Button";
import "./style.css";

const CarCard = ({ image, title, price, buttonCallback }) => {
  return (
    <div className="car-card-container">
      <div className="car-card-image">
        <img src={image} alt="car image" />
      </div>
      <div className="car-card-info">
        <p>{title}</p>
        <div className="car-card-price">Rp {price} / hari</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <button className="car-card-button" onClick={buttonCallback}>
          Pilih Mobil
        </button>
      </div>
    </div>
  );
};

export default CarCard;
