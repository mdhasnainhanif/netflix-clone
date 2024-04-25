import React from "react";
import Banner from "../assets/images/home/home-banner.jpg";
import GetStartedForm from "./GetStartedForm";

const HomeBanner = () => {
  return (
    <>
      <section
        className="h-[700px] top-0 left-0 w-full bg-center bg-cover bg-no-repeat"
        style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${Banner}) center / cover no-repeat` }}>
        <div className="absolute inset-0 bg-black opacity-30 before:bg-black before:opacity-30 h-[700px]"></div>
        <div className="container h-[650px] flex justify-center items-center mx-auto flex-col relative z-10 lg:max-w-[70%]">
          <h1 className="text-center text-white md:text-[48px] text-[30px] font-bold">Unlimited movies, TV shows, and more</h1>
          <h3 className="text-center text-white text-[24px] md:my-0 mt-3">Watch anywhere. Cancel anytime.</h3>
          <GetStartedForm />
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
