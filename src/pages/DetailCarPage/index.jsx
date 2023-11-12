import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailCarPage = () => {
  const param = useParams();
  const [carData, setCarData] = useState({});
  useEffect(() => {
    handleGetCar();
  }, []);

  const handleGetCar = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setCarData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header hasBanner={true} />
      <div>
        <img src={carData.image} alt="" />
        <h1>{carData.name}</h1>
        <h1>{carData.category}</h1>
        <h1>{carData.price}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCarPage;
