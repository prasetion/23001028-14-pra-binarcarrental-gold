import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const SearchCarPage = () => {
  const [carsData, setCarsData] = useState([]);
  const [carName, setCarName] = useState("");
  const [carCategory, setCarCategory] = useState("");
  const [carIsRented, setCarIsRented] = useState("");
  const [carMinPrice, setCarMinPrice] = useState("");
  const [carMaxPrice, setCarMaxPrice] = useState("");

  useEffect(() => {
    handleGetCars(carName, carCategory, carIsRented, carMinPrice, carMaxPrice);
  }, []);

  const handleGetCars = (name, category, isRented, minPrice, maxPrice) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${category}&isRented=${isRented}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=1&pageSize=10`
      )
      .then((res) => {
        console.log(res.data.cars);
        setCarsData(res.data.cars);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header hasBanner={true} />
      <div className="search-section">
        <label>nama mobil</label>
        <input type="text" />
        <br />
        <label>kategori</label>
        <select>
          <option value="">-</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>
        <label>harga</label>
        <select>
          <option value="">-</option>
          <option value="beverage">small</option>
          <option value="main-dish">medium</option>
          <option value="main-dish">large</option>
        </select>
        <label>status</label>
        <select>
          <option value="">-</option>
          <option value="true">Disewakan</option>
          <option value="false">Tersewa</option>
        </select>
      </div>
      {carsData.map((car, index) => (
        <div key={index}>
          <img src={car.image} alt="" />
          <h3>{car.name}</h3>
          <h3>{car.price}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Pilih Mobil</button>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default SearchCarPage;
