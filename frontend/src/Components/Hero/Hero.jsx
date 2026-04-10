import React from "react";
import "./Hero.css";
import handIcon from "../../assets/hand_icon.png";
import arrow from "../../assets/arrow.png";
import heroImage from "../../assets/Hero1.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arrivals</h2>
          <div>
            <div className="hand-icon">
              <p>New</p>
              <img src={handIcon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <div>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
