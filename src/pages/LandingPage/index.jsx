import "./style.css";
import Footer from "../../components/Footer";
import WhyUs from "../../components/WhyUs";
import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import OurServices from "../../components/OurServices";

const LandingPage = () => {
  return (
    <div>
      <OurServices />
      <WhyUs />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
