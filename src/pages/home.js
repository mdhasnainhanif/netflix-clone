import React from "react";
import HomeBanner from "../components/HomeBanner";
import Faq from "../components/Faq";
import MoviesCardSection from "../components/MoviesCardSection";

const home = () => {
  return (
    <>
      <HomeBanner />
      <MoviesCardSection />
      {/*<HomeSection2 />
      <HomeSection3 />
      <HomeSection4 /> */}
      <Faq />
    </>
  );
};

export default home;
