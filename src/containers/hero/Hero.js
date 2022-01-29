import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.scss";
import img from "../../assets/hero-img.png";

const Hero = () => {
  let navigate = useNavigate();

  return (
    <div className="hero section__padding">
      <div className="hero__main">
        <div className="hero__main-content">
          <h1>The finest goods and products.</h1>
          <p>
            Leading the best supply of high quality goods from Indonesia and
            export all around the world.
          </p>
          <button
            type="button"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Us
          </button>
        </div>
        <div className="hero__main-image">
          <img src={img} alt="hero" />
        </div>
      </div>
      <div className="hero__features">
        <h6>RECENT SHIPMENTS</h6>
        <ul>
          <li>INDONESIA</li>
          <li>THAILAND</li>
          <li>SINGAPORE</li>
          <li>MALAYSIA</li>
          <li>BRAZIL</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
