import React from "react";
import "./Footer.css";
import logo from "../../assets/HungryAi.png";

const Footer = () => {
  return (
    <footer className="marketing-footer h-24 flex justify-between w-full border-0 rounded-xl mt-8">
      <div className="footer-logo">
        <img className="LogoImg" src={logo} alt="Description of the image" />
      </div>
      <div className="footer-content">
        <p>Serving up culinary creativity with AI precision</p>
      </div>
    </footer>
  );
};

export default Footer;
