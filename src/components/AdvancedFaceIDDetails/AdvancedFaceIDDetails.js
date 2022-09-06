import React from "react";
import backimg from "../../assets/bg_img_4.png";
import "./AdvancedFaceIDDetails.scss";

const AdvancedFaceIDDetails = () => {
  return (
    <div className="faceiddetails_section">
      <div className="faceiddetails_img_section">
        <img src={backimg} alt="backimg" />
      </div>
      <div className="faceiddetails_txt_section">
        <h2>Advanced Face ID</h2>
        <h4>SECURITY IS SIMPLE WHEN YOUR FACE IS YOUR PASSWORD.</h4>
        <p>
          You can unlock your iPhone, log in to apps, and pay for things with a
          glance. It’s the most secure facial authentication ever in a
          smartphone. And now it’s even faster.
        </p>
      </div>
    </div>
  );
};

export default AdvancedFaceIDDetails;
