import React from "react";
import backimg from "../../assets/bg_img_5.png";
import "./AboutPhoneFeature.scss";

const AboutPhoneFeature = () => {
  return (
    <div className="aboutphonefeature_section">
      {/* <div className="aboutphonefeature_img_section">
        <img src={backimg} alt="backimg" />
      </div> */}
      <div className="aboutphonefeature_txt_section">
        <h2>No other phone is like iPhone</h2>
        <p>EVERY DECISION THAT GOES INTO IPHONE MAKES IT STAND APART</p>
      </div>
    </div>
  );
};

export default AboutPhoneFeature;
