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
  const [carPrice, setCarPrice] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [hasDetail, setHasDetail] = useState(false);

  useEffect(() => {
    handleGetCars(carName, carCategory, carIsRented, carPrice);
    handleSelectCar(carId);
  }, []);

  const handleGetCars = (name, category, isRented, price) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${category}&isRented=${isRented}&${price}&page=1&pageSize=10`
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
    setCarPrice("");
    setHasDetail(false);
    handleGetCars("", "", "", "", "");
    setIsSearch(false);
  };

  const handleFindCars = () => {
    setIsSearch(true);
    handleGetCars(carName, carCategory, "", "", "");
  };

  const getCarNameInput = (e) => {
    setCarName(e.target.value);
  };

  const getCarCategoryInput = (e) => {
    setCarCategory(e.target.value);
  };

  const getCarPriceInput = (e) => {
    setCarPrice(e.target.value);
  };

  return (
    <div>
      <Header hasBanner={true} />
      <div className="search-section mb-5">
        <div className="search-section-input">
          <label>Nama Mobil</label>
          <input type="text" value={carName} onChange={getCarNameInput} />
        </div>
        <div className="search-section-input">
          <label>Kategori</label>
          <select value={carCategory} onChange={getCarCategoryInput}>
            <option value="">-</option>
            <option value="small">2-3 orang</option>
            <option value="medium">4-5 orang</option>
            <option value="large">6-8 orang</option>
          </select>
        </div>
        <div className="search-section-input">
          <label>Harga</label>
          <select value={carPrice} onChange={getCarPriceInput}>
            <option value="">-</option>
            <option value="minPrice=0&maxPrice=250000">
              Rp. 0 - Rp. 250.000
            </option>
            <option value="minPrice=250000&maxPrice=400000">
              Rp. 250.000 - Rp. 400.000
            </option>
            <option value="minPrice=400000&maxPrice=600000">
              Rp. 400.000 - Rp. 600.000
            </option>
          </select>
        </div>
        <div className="search-section-input">
          <label>Status</label>
          <select value={carIsRented}>
            <option value="">-</option>
            <option value="true">Disewakan</option>
            <option value="false">Tersewa</option>
          </select>
        </div>
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
      ) : carsData.length > 0 ? (
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
      ) : (
        <h2 className="car-not-found">Mobil tidak ditemukan</h2>
      )}
      <Footer />
    </div>
  );
};

export default SearchCarPage;
