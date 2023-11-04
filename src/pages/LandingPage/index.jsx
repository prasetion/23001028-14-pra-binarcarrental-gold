import "./style.css";
import Footer from "../../components/Footer";
import WhyUs from "../../components/WhyUs";
import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";

const LandingPage = () => {
  return (
    <div>
      <WhyUs />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
