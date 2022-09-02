import React from "react";
import TextTransition from "../../components/TextTransition/TextTransition";
import Banner from "../../components/Banner/Banner";
import MobileDifference from "../../components/MobileDifference/MobileDifference";
import MobileSpecification from "../../components/MobileSpecification/MobileSpecification";
import MobileImgSection from "../../components/MobileImgSection/MobileImgSection";

const Home = () => {
  return (
    <>
      {/* <TextTransition/> */}
      <Banner />
      <MobileDifference />
      <MobileSpecification />
      <MobileImgSection />
    </>
  );
};

export default Home;
