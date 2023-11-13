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

  const getCategory = (category) => {
    if (category === "small") return "2 - 3 Orang";
    if (category === "medium") return "4 - 5 Orang";
    if (category === "large") return "6 - 8 Orang";
  };

  return (
    <div>
      <Header hasBanner={true} />
      <div className="detail-car-container">
        <div className="detail-car-container-border detail-car-container-left">
          <p className="pb-3">Tentang Paket</p>
          <div>
            <p className="pb-2">Include</p>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </div>
          <div>
            <p className="pb-2">Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <div>
            <p className="pb-2">Refund, Reschedule, Overtime</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <div className="detail-car-container-border detail-car-container-right">
          <img src={carData.image} className="detail-car-image" />
          <div className="detail-car-info">
            <p>{carData.name}</p>
            <div className="detail-car-category">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M11.5 10.5004V9.50043C11.4997 9.05729 11.3522 8.62682 11.0807 8.27659C10.8092 7.92636 10.4291 7.67621 10 7.56543"
                  stroke="#8A8A8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 10.5V9.5C8.5 8.96957 8.28929 8.46086 7.91421 8.08579C7.53914 7.71071 7.03043 7.5 6.5 7.5H2.5C1.96957 7.5 1.46086 7.71071 1.08579 8.08579C0.710714 8.46086 0.5 8.96957 0.5 9.5V10.5"
                  stroke="#8A8A8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1.56543C8.43021 1.67558 8.81152 1.92578 9.08382 2.27658C9.35612 2.62739 9.50392 3.05884 9.50392 3.50293C9.50392 3.94701 9.35612 4.37847 9.08382 4.72927C8.81152 5.08008 8.43021 5.33028 8 5.44043"
                  stroke="#8A8A8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z"
                  stroke="#8A8A8A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>{getCategory(carData.category)}</div>
            </div>
          </div>
          <div className="detail-car-price">
            <p>Total</p>
            <p>{carData.price}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailCarPage;
