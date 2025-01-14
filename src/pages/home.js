import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import Faq from "../components/Faq";
import MoviesCardSection from "../components/MoviesCardSection";

const home = () => {
  return (
    <>
      <HomeBanner />
      <MoviesCardSection />
      {/* <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 /> */}
      <Faq />
    </>
  );
};

export default home;
