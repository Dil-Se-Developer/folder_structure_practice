import React from "react";
import card_img_1 from "../../assets/card_img_1.jpeg";
import card_img_2 from "../../assets/card_img_2.jpeg";
import card_img_3 from "../../assets/card_img_3.jpeg";
import card_img_4 from "../../assets/card_img_4.jpeg";
import card_img_5 from "../../assets/card_img_5.jpeg";
import card_img_6 from "../../assets/card_img_6.jpeg";


import "./MobileGallery.scss";

const MobileGallery = () => {
  return <div className="page_container MobileGallery_Section">
    <img src={card_img_1} alt="Card Img"/>
    <img src={card_img_2} alt="Card Img"/>
    <img src={card_img_3} alt="Card Img"/>
    <img src={card_img_4} alt="Card Img"/>
    <img src={card_img_5} alt="Card Img"/>
    <img src={card_img_6} alt="Card Img"/>
  </div>;
};

export default MobileGallery;
