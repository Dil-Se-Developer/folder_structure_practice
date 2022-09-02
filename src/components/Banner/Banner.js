import React from "react";
import bg_img from "../../assets/bg_img_1.png";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="banner_section">
      <div className="banner_img">
        <img src={bg_img} alt="BackgroundImage"/>
      </div>
      <div className="banner_text">
        <h2>iPhone XS and iPhone XS Max:</h2>
        <p>EVERYTHING YOU NEED TO KNOW!</p>
      </div>
    </div>
  );
};

export default Banner;
