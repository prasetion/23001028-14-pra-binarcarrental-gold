import "./style.css";
import Footer from "../../components/Footer";
import WhyUs from "../../components/WhyUs";
import Banner from "../../components/Banner";
import FAQ from "../../components/FAQ";
import OurServices from "../../components/OurServices";
import Header from "../../components/Header";
import Testimony from "../../components/Testimony";

const LandingPage = () => {
  return (
    <div>
      <Header hasBanner={true} />
      <OurServices />
      <WhyUs />
      <Testimony />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
