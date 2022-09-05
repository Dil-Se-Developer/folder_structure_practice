import React from "react";
import TextTransition from "../../components/TextTransition/TextTransition";
import Banner from "../../components/Banner/Banner";
import MobileDifference from "../../components/MobileDifference/MobileDifference";
import MobileSpecification from "../../components/MobileSpecification/MobileSpecification";
import MobileImgSection from "../../components/MobileImgSection/MobileImgSection";
import MaterialDetails from "../../components/MaterialDetails/MaterialDetails";
import MobileGallery from "../../components/MobileGallery/MobileGallery";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <TextTransition/> */}
      <Banner />
      <MobileDifference />
      <MobileSpecification />
      <MobileImgSection />
      <MaterialDetails/>
      <MobileGallery/>
      <Footer/>
    </>
  );
};

export default Home;
