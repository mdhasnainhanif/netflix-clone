import React from "react";
import Phone from "../assets/images/home/mobile-0819.jpg";
import Boxshot from "../assets/images/home/boxshot.png";
import DownloadIcon from "../assets/images/home/download-icon.gif";

const HomeSection2 = () => {
  return (
    <>
      <section className="bg-black border-b-8	border-[#232323]	">
        <div className="container py-24 mx-auto md:px-0 px-6 lg:max-w-[70%]">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <img className="md:w-[550px]" src={Phone} alt="" />
                <div className="bg-black px-4 py-2 border-2 border-[#232323] rounded w-fit flex gap-6 items-center justify-center absolute md:top-80 md:left-28 top:40 max-[600px]:top-[70%] max-[600px]:left-[13%]">
                  <div className="w-fit">
                    <img width="60px" src={Boxshot} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Stranger Things</h5>
                    <p className="text-blue-700 text-left">Downloading...</p>
                  </div>
                  <div className="w-fit">
                    <img width="60px" src={DownloadIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-16 md:mt-0">
              <h1 className="text-white md:text-[48px] text-[40px] text-left font-bold">
                Download your shows <br /> to watch offline
              </h1>
              <p className="md:text-[24px] text-[20px] text-white text-left">Save your favorites easily and always have something to watch.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection2;
