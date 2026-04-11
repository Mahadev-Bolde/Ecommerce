import React from "react";
import "./Footer.css";
import logo from "../../assets/shopping-logo.jpg";
import instagramIcon from "../../assets/instagram_icon.png";
import whatsappIcon from "../../assets/whatsapp_icon.png";
import pintrestIcon from "../../assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Online Shopping</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrestIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
