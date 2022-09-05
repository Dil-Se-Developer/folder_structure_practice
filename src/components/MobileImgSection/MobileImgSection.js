import React from "react";
import mobile_img_1 from "../../assets/mobile_img_1.png";
import mobile_img_2 from "../../assets/mobile_img_2.png";
import mobile_img_3 from "../../assets/mobile_img_3.png";
import "./MobileImgSection.scss";

const MobileImgSection = () => {
  return (
    <div className="page_container mobileimg_section">
      <div className="mobileimg_card">
        <img src={mobile_img_1} alt="mobile_img_1" />
        <h3>iPhone Xs Max</h3>
        <p>6.5″ display1</p>
      </div>
      <div className="mobileimg_card">
        <img src={mobile_img_2} alt="mobile_img_2" />
        <h3>iPhone Xs</h3>
        <p>5.8″ display1</p>
      </div>
      <div className="mobileimg_card">
        <img src={mobile_img_3} alt="mobile_img_3" />
        <h3>iPhone Xr</h3>
        <p>6.1″ display1</p>
      </div>
    </div>
  );
};

export default MobileImgSection;
