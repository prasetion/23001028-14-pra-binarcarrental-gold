import WhyUsCard from "../WhyUsCard";
import "./style.css";
import { whyUsData } from "../../datas/WhyUsData";

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <div className="whyus-header">Why Us?</div>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <div className="whyus-card">
        {whyUsData.map((item, index) => (
          <WhyUsCard key={index} data={item} />
          //   <div>
          //     <p>{item.title}</p>
          //     <p>{item.desc}</p>
          //   </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
