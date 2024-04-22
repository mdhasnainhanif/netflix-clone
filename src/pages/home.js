import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import Faq from "../components/Faq";

const home = () => {
  return (
    <>
      <HomeBanner />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Faq />
    </>
  );
};

export default home;
