import React from "react";
import LedImage from "../assets/images/home/tv.png";
// import ReactPlayerVideo from "./ReactPlayerVideo";
import videoTV from "../assets/images/home/video-tv.m4v";

const HomeSection1 = () => {
  return (
    <>
      <section className="bg-black border-y-8	border-[#232323]	">
        <div className="container py-24 mx-auto md:px-0 px-6 lg:max-w-[80%]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <h1 className="text-white md:text-[48px] text-[40px] text-left font-bold">Enjoy on your TV</h1>
              <p className="md:text-[24px] text-[20px] text-white text-left">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div>
              <div className="relative">
                <img className="md:w-[550px]" src={LedImage} alt="" />
                {/* <ReactPlayerVideo classes='absolute top-0 left-[0px] border-2 border-red-700' url={videoTV} height={100} border-2/> */}
                <video className="max-[1532px]:w-[63%] absolute top-[22%] left-[15%] md:top-[21%] md:left-[75px] lg:w-[70%] 2xl:w-[60%] md:w-[63%] w-[80%]" width="63%" src={videoTV} autoPlay loop muted></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection1;
