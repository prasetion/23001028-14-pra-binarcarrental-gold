import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../../components/CarCard";
import DetailCar from "../../components/DetailCar";

const SearchCarPage = () => {
  const [carsData, setCarsData] = useState([]);
  const [carDetailData, setCarDetailData] = useState({});
  const [carId, setCarId] = useState("");
  const [carName, setCarName] = useState("");
  const [carCategory, setCarCategory] = useState("");
  const [carIsRented, setCarIsRented] = useState("");
  const [carMinPrice, setCarMinPrice] = useState("");
  const [carMaxPrice, setCarMaxPrice] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [hasDetail, setHasDetail] = useState(false);

  useEffect(() => {
    handleGetCars(carName, carCategory, carIsRented, carMinPrice, carMaxPrice);
    handleSelectCar(carId);
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

  const handleSelectCar = (id) => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
      .then((res) => {
        console.log(res.data);
        setCarDetailData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    setCarName("");
    setCarCategory("");
    setCarIsRented("");
    setHasDetail(false);
    handleGetCars("", "", "", "", "");
    setIsSearch(false);
  };

  const handleFindCars = () => {
    setIsSearch(true);
    handleGetCars("", "", "", "", "");
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
        {isSearch || hasDetail ? (
          <button onClick={handleReset}> Reset</button>
        ) : (
          <button onClick={handleFindCars}> Cari Mobil</button>
        )}
      </div>
      {hasDetail ? (
        <DetailCar
          name={carDetailData.name}
          image={carDetailData.image}
          category={carDetailData.category}
          price={carDetailData.price}
        />
      ) : (
        <div className="card-list-container">
          {carsData.map((car, index) => (
            <CarCard
              key={index}
              title={car.name}
              image={car.image}
              price={car.price}
              buttonCallback={(e) => {
                setCarId(car.id);
                handleSelectCar(car.id);
                setHasDetail(true);
              }}
            ></CarCard>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SearchCarPage;
