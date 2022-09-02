import React from "react";
import bg_img from "../../assets/bg_img_2.png";
import "./MobileDifference.scss";

const MobileDifference = () => {
  return (
    <div className="mobile_difference_section">
      <div className="mobile_difference_img">
        <img src={bg_img} alt="BackgroundImage" />
      </div>
      <div className="mobile_difference_text">
        <h2>What's the difference between the iPhone XS and iPhone XS Max?</h2>
        <p>
          iPhone XS has a 5.8-inch OLED display and the iPhone XS Max has a
          6.5-inch OLED display, meaning the iPhone Xs Max is larger; however,
          other than that, there is no difference between the two new phones on
          the inside.
        </p>
      </div>
    </div>
  );
};

export default MobileDifference;
