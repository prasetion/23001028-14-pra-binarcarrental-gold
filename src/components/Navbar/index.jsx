import "./style.css";
import Logo from "../Logo";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const handleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
    console.log(isOpenSideBar);
  };

  return (
    <div className="navbar-container">
      <Logo></Logo>
      <div className="navbar-menu">
        <div>
          <a href="#our-service">Our Services</a>
        </div>
        <div>
          <a href="#why-us">Why Us</a>
        </div>
        <div>
          <a href="#testimonial">Testimonial</a>
        </div>
        <div>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <div className="navbar-side">
        <button onClick={handleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 18H21"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <Sidebar isOpen={isOpenSideBar} toggle={handleSideBar} />
    </div>
  );
};

export default Navbar;
